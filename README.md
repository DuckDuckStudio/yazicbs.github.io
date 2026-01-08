# 鸭鸭「カモ」 的个人网站

| 页面部署 | 检查本地路径 | 检查链接有效性 |
|---------|-------------|---------------|
| [![向 GitHub Page 部署静态内容](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/deploy.yml) | [![检查本地路径](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check-local-paths.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check-local-paths.yml) | [![检查链接有效性](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check_url_visit.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/check_url_visit.yml) |

| 处理自动合并标签 | 生成 Sitemap | 依赖更新 |
|-----------------|-------------|----------|
| [![处理自动合并标签](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/handle_auto_merge_labels.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/handle_auto_merge_labels.yml) | [![生成 Sitemap](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/generate-sitemap.yml/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/generate-sitemap.yml) | [![Dependabot Updates](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/DuckDuckStudio/yazicbs.github.io/actions/workflows/dependabot/dependabot-updates) |

## 关于本网页
本网站由 **鸭鸭「カモ」** 编写与维护，如有任何问题可以[提交Issues](https://github.com/DuckDuckStudio/yazicbs.github.io/issues)进行反馈。  
Code by **鸭鸭「カモ」**，保留本网站最终解释权。    
[点我前往网站主页](https://duckduckstudio.github.io/yazicbs.github.io/)

<div id="模板"></div>

## 页面模板 / 可调用脚本 / 可调用样式
本仓库提供了一些我自己写的页面模板，这里列出链接:  
* [某鸭的文章页面模板(小鸡习下的html页面)](https://github.com/DuckDuckStudio/Articles/blob/main/docs/某鸭的文章页面模板.html)  
同时，本仓库也提供了一些可直接调用的脚本/样式:  
* 芙芙工具箱通用样式
```html
<!-- 芙芙工具箱网页通用样式 by 鸭鸭「カモ」 -->
<link rel="stylesheet" href="https://duckduckstudio.github.io/yazicbs.github.io/Tools/Fufu_Tools/css/universal.css">
```
* 一些控制台游戏
  * 猜数字
  ```html
  <!-- 控制台猜数字 by鸭鸭「カモ」 -->
  <script src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/games/guess_number.js"></script>
  ```
    * 简略版 - 你在[这个页面](https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/index.html)的控制台上可以玩到。简略版会抛个WARN，不过你不用管。
    ```html
    <!-- 控制台猜数字简略版 by鸭鸭「カモ」 -->
    <script src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/games/simplified/guess_number.js"></script>
    ```
* 节日  
```html
<!-- 节日庆祝 by鸭鸭「カモ」 -->
<script src="https://duckduckstudio.github.io/yazicbs.github.io/zh_cn/js/Festivals.js"></script>
```
* 计算(离)寒暑假还剩多少秒 - [Demo](https://duckduckstudio.github.io/yazicbs.github.io/Interesting/vacation_countdown/)
```html
<!-- (离)寒暑假还有多久 by鸭鸭「カモ」 -->
<script src="https://duckduckstudio.github.io/yazicbs.github.io/Interesting/vacation_countdown/计算_中.js"></script>
```

## Q&A
### 为啥要建立这个网页？
因为我之前是学校编程社团的，就自己尝试着做了一个简易的网站。  
类似于这样的：  
```html
<html>
  <head>
    <title>xxx</title>
  </head>
  <body>
    <div>
      <h1>欢迎来到某鸭的网站</h1>
      <a href = "xxx">点击进入我的bilibili主页</a>
    </div>
  </body>
  <!-- 这根本就没用 JS 吧! -->
</html>
```
后面又想到我的账号可能可以写一个网页来推广(最初目的)，于是便有了这个网页。  
再后来，我就渐渐的把这个网页写成了个人的网页。  

### 你个人对主页面的评价是？
~~就完全是乱七八糟的垃圾代码，我都想写个新的了。~~  
很早之前写的，乱一点 ~~(亿点)~~ 正常。  

### 这个网页有什么彩蛋吗？
特定日期、代码中、F12...总之就是翻代码啦!  

### 为什么不直接用 Markdown 写文章？
我已经尝试这样做了，我用 [docsify](https://docsify.js.org/) 部署了部分 Markdown 写的文章，[~~小鸡习~~](https://duckduckstudio.github.io/Articles/)的文章就是用 Markdown 写的。  
但是 [docsify](https://docsify.js.org/) 对 SEO 似乎不太友好...

<p style="text-align:right">鸭鸭「カモ」</p>
