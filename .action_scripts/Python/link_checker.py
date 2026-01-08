import os
import re
import sys
import requests
from time import sleep
from typing import Literal

def main() -> int:
    DIRECTORY = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    IGNORE_FOLDERS = ["没有"] # 忽略的文件夹
    IGNORE_FILES = ["没有"] # 忽略的文件
    IGNORE_URLS = [
        # 临时因多次 429 忽略
        "https://ipapi.co/json/"
    ] # 忽略的链接

    # 正则匹配链接
    URL_REGEX = re.compile(r'"https://[^\'"\n\r\s<>]*(?=[\'"])')

    return check_files(DIRECTORY, IGNORE_FOLDERS, IGNORE_FILES, IGNORE_URLS, URL_REGEX)

def check_link(url: str, IGNORE_URLS: list[str]) -> tuple[str | int, str]:
    if url in IGNORE_URLS:
        return "Ignored URL", "ignored"
    try:
        response = requests.head(url, allow_redirects=True)
        if response.status_code == 429:
            # 1秒后重试
            sleep(1)
            response = requests.head(url, allow_redirects=True)

        if response.status_code in [412, 403, 401]:
            return response.status_code, "warning"
        elif response.status_code == 404:
            return "404 Not Found", "failed"
        elif 400 <= response.status_code < 500:
            return response.status_code, "failed"
        else:
            return response.status_code, "passed"
    except requests.ConnectionError:
        return "Connection Error", "failed"
    except requests.Timeout:
        return "Timeout", "failed"
    except requests.RequestException as e:
        return f"Error: {e}", "failed"

def check_files(DIRECTORY: str, IGNORE_FOLDERS: list[str], IGNORE_FILES: list[str], IGNORE_URLS: list[str], URL_REGEX: re.Pattern[str]) -> Literal[1] | Literal[0]:
    for root, _, files in os.walk(DIRECTORY):
        # 忽略指定的文件夹
        if any(ignore in root for ignore in IGNORE_FOLDERS):
            continue
        
        for file in files:
            # 忽略指定的文件
            if (file in IGNORE_FILES) or (not file.endswith((".html", ".css", ".js", ".md"))):
                continue
            
            file_path = os.path.join(root, file)
            relative_file_path = os.path.relpath(file_path, DIRECTORY) # 计算相对路径
            with open(file_path, 'r', encoding='utf-8') as f:
                for line_number, line in enumerate(f, start=1):
                    urls: list[str]
                    urls = URL_REGEX.findall(line)
                    for url in urls:
                        if url.startswith(("'", '"')):
                            url = url.strip('\'"') # 去除引号
                        status_code, status_message = check_link(url, IGNORE_URLS)
                        if status_message == "ignored":
                            print(f"\n[IGNORED] 文件: {relative_file_path} | 行号: {line_number} | 链接: {url} | 返回代码: {status_code}")
                        elif status_message == "passed":
                            print('*', end='')
                        else:
                            if status_message == "warning":
                                print(f"\n[WARNING] 文件: {relative_file_path} | 行号: {line_number} | 链接: {url} | 返回代码: {status_code}")
                            elif status_message == "failed":
                                print(f"\n[ERROR] 文件: {relative_file_path} | 行号: {line_number} | 链接: {url} | 返回代码: {status_code}")
                                return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
