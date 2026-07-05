// 替换版权年份
// @ts-expect-error: 2531
document.getElementById("copyright_year").textContent = new Date().getFullYear();

// 计算 Star
async function getTotalStars() {
    try {
        let totalStars = 0;

        // 直接请求 GitHubView 仓库的信息
        const response = await fetch('https://api.github.com/repos/DuckDuckStudio/GitHubView');

        if (!response.ok) {
            throw new Error(`[ERROR(GitHub状态-API)] GitHub API 错误: ${response.statusText}`);
        }

        const repo = await response.json();

        // 直接获取 GitHubView 仓库的 Star 数并显示
        totalStars += repo.stargazers_count;
        // @ts-expect-error: 2531
        document.getElementById('total-stars').innerText = `⭐ ${totalStars}`;
    } catch (error) {
        console.error('[ERROR(GitHub状态-替换)] GitHub Star 自动替换出错:', error);
        // @ts-expect-error: 2531
        document.getElementById('total-stars').innerText = `❌ 数据获取出错，参阅输出以获取更多信息`;
    }
}

// 截图轮播功能
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.carousel-indicators');

// 创建轮播指示点
function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => showSlide(index));
        // @ts-expect-error: 18047
        indicatorsContainer.appendChild(indicator);
    });
}

// 显示指定幻灯片
function showSlide(index: number) {
    // @ts-expect-error: 2532
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    // @ts-expect-error: 2532
    slides[currentSlide].classList.add('active');

    // 更新指示点状态
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

// 自动轮播
function autoPlay() {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6000); // 每 6 秒切换一次
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    getTotalStars();
    createIndicators();
    autoPlay();
});
