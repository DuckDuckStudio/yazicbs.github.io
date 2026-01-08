// 前面不要加空格
console.log(`
ddddd                  k         ssss                   d  i
d     d         c c c  k   k     s      t           ddddd      oooo
d     d  u   u  c      k k        sss  ttt  u   u  d    d  i  o    o
d     d  u   u  c      k k           s  t   u   u  d    d  i  o    o
ddddd    u u u  c c c  k   k     sssss  t   u u u   ddddd  i   oooo

本站维护人员：
鸭鸭「カモ」
欢迎关注我的bilibili频道：@鸭鸭_カモ
https://space.bilibili.com/2054654702/
回到主页：https://duckduckstudio.github.io/yazicbs.github.io/
`)

document.addEventListener("DOMContentLoaded", () => {
    /**
     * 更新页面上显示的时间。
     */
    function updateClock() {
        let now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        now = `${hours}:${minutes}:${seconds}`;
        document.getElementById("Clock").innerHTML = style(now);
    }

    /**
     * 为时钟添加样式。
     * @param {string} timeText 
     * @returns 返回带有样式的时间文本。
     */
    function style(timeText) {
        return timeText.toLocaleString().replace(/:/g, "<span class=\"comma\">:</span>");
    }

    // 每秒更新一次
    setInterval(updateClock, 1000);

    // 初次调用以显示时间
    updateClock();
});
