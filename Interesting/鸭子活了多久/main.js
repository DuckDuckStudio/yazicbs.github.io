// 前面不要加空格
console.log(`
ddddd                  k         ssss                   d  i
d     d         c c c  k   k     s      t           ddddd      oooo
d     d  u   u  c      k k        sss  ttt  u   u  d    d  i  o    o
d     d  u   u  c      k k           s  t   u   u  d    d  i  o    o
ddddd    u u u  c c c  k   k     sssss  t   u u u   ddddd  i   oooo

本站维护人员:
鸭鸭「カモ」
欢迎关注我的bilibili频道: @鸭鸭_カモ
https://space.bilibili.com/2054654702/
回到主页: https://duckduckstudio.github.io/yazicbs.github.io/
`)

document.addEventListener('DOMContentLoaded', () => {
    // 多只鸭子的出生日期
    const 鸭子们 = [
        // 我家 <名字> 活了相当于人...
        { 名字: "嘎嘎", 出生: new Date(2023, 11, 5), 哪天嘎的: null }, // 2023年12月5日
        // 2025年7月13日来的，比较小的往前推 2 天，比较大的在小的基础上再推 3 天
        { 名字: "老二", 出生: new Date(2025, 6, 8), 哪天嘎的: null }, // 2025年7月8日 - 比较大的
        { 名字: "老三", 出生: new Date(2025, 6, 11), 哪天嘎的: null }, // 2025年7月11日 - 比较小的
        // 可继续添加更多鸭子 (・◇・)
    ];

    // 初始化
    let 哪只鸭子 = 0; // 叫 嘎嘎 的那只
    /** 设置当前显示模式。0 相当于，显示日 | 1 相当于，不显示日 | 2 实际，显示日 | 3 实际，不显示日 */
    let 显示 = 0;

    /** 打印调试日志（DEBUG 等级） */
    function 打印日志(操作="null") {
        // 感觉更新岁数那里的日志还是自己打好点。
        console.debug(`[DEBUG] (${操作}) 显示状态: ${显示} | 显示日: ${显示 % 2 == 0} | 鸭子没噶: ${!鸭子们[哪只鸭子].哪天嘎的} | 哪只鸭子: ${哪只鸭子} | 总鸭子数: ${鸭子们.length - 1}`);
    }

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
            let 最终时间;
            const 鸭子出生 = 鸭子们[哪只鸭子].出生;
            if (鸭子们[哪只鸭子].哪天嘎的) {
                最终时间 = 鸭子们[哪只鸭子].哪天嘎的;
            } else {
                最终时间 = new Date();
            }
            活了多久 = (最终时间 - 鸭子出生) / 1000 / (365 * 24 * 60 * 60); // 年
            if (显示 < 2) {
                鸭子占比 = 活了多久 / 6;
                活了多久 = 80 * 鸭子占比;
            }
            岁数 = 格式化岁数(活了多久);
            console.log(`%c[log] 哪只鸭子: ${鸭子们[哪只鸭子].名字} | 活了多久(实际): ${格式化岁数(活了多久)} | 鸭子占比: ${鸭子占比} | 鸭子没噶: ${!鸭子们[哪只鸭子].哪天嘎的}`, "color: cyan");
        } catch (error) {
            岁数 = "没算出来";
            console.error(`[ERROR] 没算出来，因为:\n${error}`);
        }

        // 更新显示内容
        document.getElementById("age").innerText = 岁数[0];
        document.getElementById("name").innerText = 鸭子们[哪只鸭子].名字;

        // 根据显示状态控制实际还是相当于
        let 岁数类型;
        if (显示 < 2) {
            岁数类型 = "活了<span style=\"color:cadetblue;\">相当于人</span>";
        } else {
            岁数类型 = "<span style=\"color:cadetblue;\">实际</span>活了";
        }

        // 是否是逝去的曾经
        if (鸭子们[哪只鸭子].哪天嘎的) {
            岁数类型 = `<span style="color:chocolate;">曾</span>${岁数类型}`;
        }

        document.getElementById("岁数类型").innerHTML = 岁数类型;
        
        // 根据显示状态控制是否显示“日”
        if (显示 % 2 == 0) {
            document.getElementById("day").innerText = 岁数[1];
        } else {
            document.getElementById("day").innerText = "";
        }
    }

    // 每 0.01 鸭日 (64800ms) 更新一次
    setInterval(更新岁数, 64800);

    // 初次调用以显示时间
    更新岁数();

    // 添加按钮点击事件来切换显示“日”
    document.getElementById("toggleDay").addEventListener("click", () => {
        打印日志("更新显示 - Before");
        显示 += 1;
        if (显示 > 3 /* 上面显示加完大于 3 表示原来是 3 */) {
            // 如果嘎了 (!没嘎)，则只有一种显示。
            if (哪只鸭子 == 鸭子们.length - 1) { // 最后一只
                哪只鸭子 = 0; // 回到第一只
            } else {
                哪只鸭子 += 1;
            }
            显示 = 0;
        }
        打印日志("更新显示 - Updated");
        更新岁数();  // 更新显示
    });
});
