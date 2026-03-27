interface ProjectInfo {
    name: string;
    url: string;
    repo?: string;
}

/**
 * 项目列表，包含项目名称、链接和可选的 GitHub 仓库信息
 */
const projects: ProjectInfo[] = [
    {
        name: "颜色代码预览",
        url: "Color.html",
    },
    {
        name: "Sundry",
        url: "https://github.com/DuckDuckStudio/Sundry/",
        repo: "DuckDuckStudio/Sundry"
    },
    {
        name: "PinAction",
        url: "https://github.com/DuckDuckStudio/PinAction/",
        repo: "DuckDuckStudio/PinAction"
    },
    {
        name: "芙芙工具箱",
        url: "Fufu_Tools/index.html",
        repo: "DuckDuckStudio/FuFu_Tools"
    },
    {
        name: "高亮“广告”Edge扩展",
        url: "https://duckduckstudio.github.io/highlight-ad-extension/#/",
        repo: "DuckDuckStudio/highlight-ad-extension"
    },
    {
        name: "中文Git",
        url: "chinese_git/index.html",
        repo: "DuckDuckStudio/Chinese_git"
    },
    {
        name: "GitHubView",
        url: "GitHubView/index.html",
        repo: "DuckDuckStudio/GitHubView"
    }
];

/**
 * 格式化日期字符串
 * @param dateStr 日期字符串
 * @returns 格式化后的日期字符串，格式为 "YYYY 年 MM 月 DD 日"；如果输入无效，则返回空字符串
 */
function formatDate(dateStr: string): string {
    if (dateStr) {
        const d = new Date(dateStr);
        if (!isNaN(d.getTime())) {
            const y = d.getFullYear();
            const m = (d.getMonth() + 1).toString().padStart(2, "0");
            const day = d.getDate().toString().padStart(2, "0");
            return `${y} 年 ${m} 月 ${day} 日`;
        } else {
            return "发布日期格式无效";
        }
    } else {
        return "未获取到发布日期";
    }
}

/**
 * 使用 Fetch API 获取数据，并设置超时机制
 * @param url 请求的 URL 地址
 * @param timeout 超时时间，单位为毫秒，默认为 5000ms
 * @returns 返回一个 Promise，解析为请求的 JSON 数据；如果请求失败或超时，则抛出错误
 */
async function fetchWithTimeout<T>(url: string, timeout = 5000): Promise<T> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2026-03-10"
            },
            signal: controller.signal
        });
        if (!response.ok) {
            throw new Error(`请求响应状态码 ${response.status}`);
        }
        return response.json();
    } finally {
        clearTimeout(timer);
    }
}

/**
 * 获取项目的表格行 HTML 字符串，包括项目名称、版本信息和发布日期
 * @param project 项目信息对象，包含项目名称、链接和可选的 GitHub 仓库信息
 * @returns 返回一个 Promise，解析为包含项目表格行的 HTML 字符串；如果项目没有 repo 字段，则返回不包含版本信息的表格行；如果请求 GitHub API 失败或超时，则在版本信息和发布日期列显示相应的错误信息
 */
async function getProjectRow(project: ProjectInfo): Promise<string> {
    // 如果项目没有 repo 字段，直接返回不包含版本信息的表格行
    if (!project.repo) {
        return `<tr><td><a href="${project.url}">${project.name}</a></td><td></td><td></td></tr>`;
    }

    let archived = false;
    let version;
    let date;

    try {
        // 归档状态
        const repoInfo: { archived: boolean } = await fetchWithTimeout(`https://api.github.com/repos/${project.repo}`);
        archived = repoInfo.archived;

        // 获取最新 release
        const releases: { tag_name: string; published_at: string }[] = await fetchWithTimeout(`https://api.github.com/repos/${project.repo}/releases?per_page=1`);
        const latestRelease = releases[0]; 
        if (latestRelease) {
            version = latestRelease.tag_name;
            date = formatDate(latestRelease.published_at);
        } else {    
            // 没有 release，尝试获取最新 tag
            const tags: { name: string, published_at: string }[] = await fetchWithTimeout(`https://api.github.com/repos/${project.repo}/tags?per_page=1`);
            const latestTag = tags[0];
            if (latestTag) {
                version = latestTag.name;
                date = formatDate(latestTag.published_at);
            } else {
                version = "无版本信息";
                date = "-";
            }
        }
    } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") {
            version = date = "请求超时";
        } else {
            version = date = `请求失败: ${e instanceof Error ? e.message : String(e)}`;
        }
    }
    return `<tr><td>${archived ? "【不再维护】" : ""}<a href="${project.url}">${project.name}</a></td><td>${version}</td><td>${date}</td></tr>`;
}

/**
 * 填充项目表格，将项目列表中的每个项目转换为表格行，并插入到表格主体中；如果表格主体元素未找到，则抛出错误
 */
async function fillProjectTable(): Promise<void> {
    const tbody = document.getElementById("project-table-body");
    if (tbody) {
        tbody.innerHTML = ""; // 清空表格内容
        for (const project of projects) {
            const row = await getProjectRow(project);
            tbody.innerHTML += row; // 追加表格行
        }
    } else {
        throw new Error("未找到表格主体元素 #project-table-body");
    }
}

// 等待 DOM 内容加载完成后填充项目表格，如果文档已经加载完成，则直接调用填充函数
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillProjectTable);
} else {
    fillProjectTable();
}
