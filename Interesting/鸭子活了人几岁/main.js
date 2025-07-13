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

document.addEventListener('DOMContentLoaded', () => {
    // 多只鸭子的出生日期
    const 鸭子们 = [
        // 我家 <名字> 活了相当于人...
        { 名字: "嘎嘎", 出生: new Date(2023, 11, 5), 没嘎: true }, // 2023年12月5日
        // 2025年7月13日来的，比较小的往前推 2 天，比较大的在小的基础上再推 3 天
        { 名字: "嘎嘎B", 出生: new Date(2025, 6, 11), 没嘎: true }, // 2025年7月11日 - 比较小的
        { 名字: "嘎嘎C", 出生: new Date(2025, 6, 8), 没嘎: true } // 2025年7月8日 - 比较大的
        // 可继续添加更多鸭子 (・◇・)
    ];

    // 初始化
    let 哪只鸭子 = 0; // 叫 嘎嘎 的那只
    let showDay = true; // 初始时显示“日”

    function 格式化岁数(岁数) {
        const 年 = Math.floor(岁数);
        const 月 = Math.floor((岁数 - 年) * 365 / 30); // 365天1年 30天1月
        const 日 = (((岁数 - 年) * 365 ) % 30).toFixed(2);
        const 返回 = [`${年} 岁 ${月} 月`, `${日}日`];
        return 返回;
    }

    function 更新岁数() {
        let 岁数 = ["🦆嘎了🦆",""]; // 下标 0 放年月，下标 1 放日。具体见本函数下方更新显示处。
        let 活了多久;

        // 鸭子活 6 年
        // 人活 80 岁

        try {
            const 鸭子没嘎 = 鸭子们[哪只鸭子].没嘎;
            const 现在 = new Date();
            if (鸭子没嘎) {
                const 鸭子出生 = 鸭子们[哪只鸭子].出生;
                活了多久 = (现在 - 鸭子出生) / 1000 / (365 * 24 * 60 * 60); // 年
                鸭子占比 = 活了多久 / 6;
                岁数 = 80 * 鸭子占比;
                岁数 = 格式化岁数(岁数);
                console.log(`%c[log] 当前时间: ${现在} | 哪只鸭子: ${鸭子们[哪只鸭子].名字} | 活了多久(实际): ${格式化岁数(活了多久)} | 鸭子占比: ${鸭子占比}`, "color: cyan");
            } else {
                // TODO: 显示那只鸭子嘎前活了相当于人多久
                console.log(`%c[log] 当前时间: ${现在} | 哪只鸭子: ${鸭子们[哪只鸭子].名字} | 嘎了没: ${!鸭子没嘎}`, "color: cyan");
            }
        } catch (error) {
            岁数 = "没算出来";
            console.error(`[ERROR] 没算出来，因为:\n${error}`);
        }

        // 更新显示内容
        document.getElementById("age").innerHTML = 岁数[0];
        document.getElementById("name").innerHTML = 鸭子们[哪只鸭子].名字;
        
        // 根据showDay控制是否显示“日”
        if (showDay) {
            document.getElementById("day").innerHTML = 岁数[1];
        } else {
            document.getElementById("day").innerHTML = "";
        }
    }

    // 每 0.01 鸭日 (64800ms) 更新一次
    setInterval(更新岁数, 64800);

    // 初次调用以显示时间
    更新岁数();

    // 添加按钮点击事件来切换显示“日”
    document.getElementById("toggleDay").addEventListener("click", () => {
        if (showDay) { // 如果是那只鸭子的第一个状态
            showDay = false;  // 切换显示状态
        } else {
            if (哪只鸭子 == 2) { // 最后一只
                哪只鸭子 = 0; // 回到第一只
            } else {
                哪只鸭子 += 1;
            }
            if (鸭子们[哪只鸭子].没嘎) {
                // 如果嘎了 (!没嘎)，则只有一种显示。这里保持嘎了的鸭子的 showDay 为 false
                // 就可以在下次点击直接切换到下一只鸭子。
                showDay = true;
            }
        }
        更新岁数();  // 更新显示
    });
});
