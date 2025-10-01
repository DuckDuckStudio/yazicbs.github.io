/* 
* JS输出分类: 游戏-猜数字
*/

// 有改动都先改简略版

var Guess_number_random_number;
var guess_max;
var guess_min;
Guess_number_init(0, 1000);
console.log("[INFO(游戏-猜数字)] 试试 Guess_number(n) 吗？[已自动初始化(Max:1000 | Min:0)]");

// 创建一个函数,生成指定范围内的随机整数
function Guess_number_init(min, max) {
  guess_max = max;
  guess_min = min;
  Guess_number_random_number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (Number.isNaN(guess_max) && Number.isNaN(guess_min)) { // 避免重复输出, 还是不懂去了自己试下就知道了
    console.log(`[Game\\Guess Number] 已成功初始化猜数字游戏 (Max:${guess_max} | Min:${guess_min})`);
  }
}

// 游戏函数 - 猜数字
function Guess_number(n) {

  var numberToGuess = Guess_number_random_number; // 使用全局变量中存储的随机数

  // 判断猜测结果
  if (Number.isInteger(n)) {
    if (n < numberToGuess) {
      console.log("[Game\\Guess Number] 太小了, 再猜看看?");
    } else if (n > numberToGuess) {
      console.log("[Game\\Guess Number] 太大了, 再猜看看?");
    } else {
      // NOTE:
      // Number.isNaN() 判断的是他是不是数字类型
      // MDN Docs: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
      //
      // Number.isInteger() 判断的是他是不是整数类型 (整型)
      // MDN Docs: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
      Guess_number_init(guess_min, guess_max);
      console.log("[Game\\Guess Number] 恭喜, 您猜对了！\n[Game\\Guess Number] 已自动初始化下一局游戏, 如需修改范围请重新使用 Guess_number_init(最小数, 最大数) 初始化");
    }
  } else {
    console.error("[Game\\Guess Number] 传入的数据类型不对");
  }
}
