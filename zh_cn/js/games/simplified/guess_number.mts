/* 
* JS输出分类: 游戏-猜数字
*/

let gm_random_number: number;
let guess_max: number;
let guess_min: number;
gm_init(0, 1000);
console.log("[INFO(游戏-猜数字)] 试试 gm(n) 吗？[已自动初始化(Max:1000 | Min:0)]");
console.log("%c[WARN(游戏-猜数字-加载)]加载的游戏为简化版", "color: yellow;");

// 创建一个函数,生成指定范围内的随机整数
function gm_init(min: number, max: number) {
    guess_max = max;
    guess_min = min;
    gm_random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (Number.isNaN(guess_max) && Number.isNaN(guess_min)) { // 避免重复输出, 还是不懂去了自己试下就知道了
        // 可是这样判断下去在自动 init 后使用 gm_init 就没有这个输出了呀...
        // 也许应该统一用这里的输出而不是各自输出
        // 或者在这个函数中加个参数控制是否输出这句？
        console.log(`[Game\\Guess Number] 已成功初始化猜数字游戏 (Max:${guess_max} | Min:${guess_min})`);
    }
}

// 游戏函数 - 猜数字
// @ts-expect-error: 6133
function gm(n: number) { // eslint-disable-line @typescript-eslint/no-unused-vars -- 用户在控制台使用
    // 判断猜测结果
    if (Number.isInteger(n)) {
        if (n < gm_random_number) {
            console.log("[Game\\Guess Number] 太小了, 再猜看看?");
        } else if (n > gm_random_number) {
            console.log("[Game\\Guess Number] 太大了, 再猜看看?");
        } else {
            // NOTE:
            // Number.isNaN() 判断的是他是不是数字类型
            // MDN Docs: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
            //
            // Number.isInteger() 判断的是他是不是整数类型 (整型)
            // MDN Docs: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
            gm_init(guess_min, guess_max);
            console.log("[Game\\Guess Number] 恭喜, 您猜对了！\n[Game\\Guess Number] 已自动初始化下一局游戏, 如需修改范围请重新使用 gm_init(最小数, 最大数) 初始化");
        }
    } else {
        console.error("[Game\\Guess Number] 传入的数据类型不对");
    }
}
