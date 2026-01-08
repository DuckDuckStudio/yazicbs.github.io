/* 创建一个新的日期对象，并将当前日期转换为中文农历格式，然后匹配腊月或正月(其他月这里用不着)。
   'zh-CN-u-ca-chinese' 表示使用中文地区的农历格式。
    得到的日期大概这样: '2024年腊月14 13:01:43'。

    TIP 如果想获得农历的年份名可以使用 'ja-JP-u-ca-chinese'.
    得到的日期大概这样: '甲辰-12-14 13:12:40'
*/
const 日期对象 = new Date().toLocaleString('zh-CN-u-ca-chinese').match(/(腊月|正月)(\d{1,2})/);
/* 判断匹配结果是否存在
   如果存在匹配结果，并且满足以下条件之一:
   1. 如果当前月份是“腊月”，并且日期大于等于29日;
   2. 如果当前月份是“正月”，并且日期小于等于16日。
*/
if (日期对象 && ((日期对象[1] === '腊月' && parseInt(日期对象[2], 10) >= 29/* 腊月29 */) || (日期对象[1] === '正月' && parseInt(日期对象[2], 10) <= 16/* 正月16 */))) {
    // 腊月29 -> 正月16
    console.log("欢天喜地\n过 大 年 ！");
    console.error(`
        |    xxxx     |
        /|\\  -------  /|\\
        /|\\  |     |  /|\\
        /|\\  | *   |  /|\\
        /|\\  |     |  /|\\
        / \\  |     |  / \\
    `);
    console.log("话说...你看得出来这是一扇门+两串鞭炮吗？");

    const 灯笼样式 = document.createElement('link');
    灯笼样式.rel = 'stylesheet';
    灯笼样式.href = 'https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/css/灯笼.css'; 
    document.head.appendChild(灯笼样式); // 动态引入 CSS 文件

    document.body.innerHTML += `
        <div class="deng-box1">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">新年</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
        <div class="deng-box2">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">快乐</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
    `; // 动态插入 HTML 内容
}
