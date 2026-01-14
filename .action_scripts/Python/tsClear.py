"""移除仓库中的 TypeScript (**/*.ts **/*.mts) 文件"""

import os
import sys

def remove(path: str):
    """尝试移除 TypeScript 文件"""

    for item in os.listdir(path):
        itemPath = os.path.join(path, item)

        if item.startswith("."):
            continue

        if os.path.isdir(itemPath):
            remove(itemPath)
        elif os.path.isfile(itemPath) and item.endswith((".ts", ".mts")):
            os.remove(itemPath)

if __name__ == "__main__":
    remove(
        os.path.dirname(
            os.path.dirname(
                os.path.dirname(
                    os.path.normpath(
                        os.path.abspath(sys.argv[0])
                    )
                )
            )
        )
    )
