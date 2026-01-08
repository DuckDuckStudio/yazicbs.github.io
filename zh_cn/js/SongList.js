// 网页左下角的歌单
// Song url: https://music.163.com/song/media/outer/url?id=****.mp3 (****处填音乐id)
// APlayer doc: https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0

// 别加歌词别加歌词，弄过了，样式不好弄

/* 
* JS输出分类: 歌单
*/

/* 随机 */
// 歌单列表
const playlists = [
    // Sweet
    [
        {
            name: "Cocopops",
            artist: "Ivoris",
            url: "https://music.163.com/song/media/outer/url?id=2056938905.mp3",
            cover: "https://p1.music.126.net/bqmwH5ZWE6hx9fQmWRHWIw==/109951168687208254.jpg"
        },
        {
            name: "Floating Star",
            artist: "Kirara Magic / Shion Lee",
            url: "https://music.163.com/song/media/outer/url?id=1830190033.mp3",
            cover: "https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg"
        },
        {
            name: "Aurora VIP",
            artist: "Kirara Magic / Shion Lee",
            url: "https://music.163.com/song/media/outer/url?id=1830187577.mp3",
            cover: "https://p2.music.126.net/E0BDTR7BomvzrYu_4ixzuA==/109951165811598413.jpg"
        },
    ],
    // 游戏
    [
        {
            name: "太空漫步",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2034615687.mp3",
            cover: "https://p2.music.126.net/RWIGyShmnjmUxizXco6fVg==/109951168505830245.jpg"
        },
        {
            name: "柔灯轻漾时",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2130083946.mp3",
            cover: "https://p2.music.126.net/vkLKNH2WpfYh4p4ACRRYOg==/109951169367650385.jpg"
        },
        {
            name: "不再年轻的村庄(轻策夜间)",
            artist: "陈致逸 / HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=1492276660.mp3",
            cover: "https://p2.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
        },
        {
            name: "清泉之诗",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2613482875.mp3",
            cover: "https://p1.music.126.net/dH0bfwKCPFdT65ZIe2OUjA==/109951169835593264.jpg"
        },
        {
            name: "风轻云暖",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2613484725.mp3",
            cover: "https://p1.music.126.net/dH0bfwKCPFdT65ZIe2OUjA==/109951169835593264.jpg"
        },
        {
            name: "清润玉响",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2140118672.mp3",
            cover: "https://p1.music.126.net/MlajrhHqU-33qDnu41p11w==/109951169447872203.jpg"
        },
        {
            name: "品茗尝清心(望舒昼间)",
            artist: "陈致逸 / HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=1492275685.mp3",
            cover: "https://p1.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg"
        },
        {
            name: "相见欢",
            artist: "塞壬唱片-MSR / MeLo_绿萝组",
            url: "https://music.163.com/song/media/outer/url?id=2668949546.mp3",
            cover: "https://p2.music.126.net/EhAPL8JRSar3zsKs0nsS5Q==/109951170419323950.jpg"
        },
        {
            name: "不存在的乐园",
            artist: "塞壬唱片-MSR / Erik Castro",
            url: "https://music.163.com/song/media/outer/url?id=2053918838.mp3",
            cover: "https://p2.music.126.net/kojx4UU24KVgoOf_szFCmg==/109951168665117523.jpg"
        },
        {
            name: "赴大荒",
            artist: "塞壬唱片-MSR / Kirara Magic",
            url: "https://music.163.com/song/media/outer/url?id=2124415181.mp3",
            cover: "https://p1.music.126.net/ryCmscVNLU0y4BEEQPhTyg==/109951169316167603.jpg"
        },
    ],
    // 纯音乐
    [
        {
            name: "Groovy Hammond",
            artist: "Aiert Erkoreka",
            url: "https://music.163.com/song/media/outer/url?id=2032764441.mp3",
            cover: "https://p2.music.126.net/n-JiSxH7Ojep-_9F1DUV9g==/109951168489951532.jpg?param=130y130" // 用原图会出现奇怪纹样
        },
        {
            name: "This Is For You",
            artist: "Lukrembo",
            url: "https://music.163.com/song/media/outer/url?id=2119282905.mp3",
            cover: "https://p2.music.126.net/6_oOAFwqRnW1m_S7EZk5OQ==/109951169274100743.jpg"
        },
        {
            name: "小樱",
            artist: "饭碗的彼岸",
            url: "https://music.163.com/song/media/outer/url?id=406070435.mp3",
            cover: "https://p2.music.126.net/r-hU2OrynWPGkDwUvrb41A==/109951168982804106.jpg"
        },
        {
            name: "風の住む街",
            artist: "原作: 磯村由紀子 / 演奏: 浅绯色的喵", // 原作网易云上要 VIP
            url: "https://music.163.com/song/media/outer/url?id=1445990834.mp3",
            cover: "https://p2.music.126.net/hVPUfLNsSnnWbUSa5kaPqg==/109951164927740327.jpg"
        },
    ],
    // 当初是你要分开，分开就分开
    // 现在又要用真爱，把我哄回来
    // 爱情不是你想买，想买就能卖
    // 让我挣开，让我明白，放手你的爱
    [
        {
            name: "牵丝戏",
            artist: "银临 / Aki阿杰",
            url: "https://music.163.com/song/media/outer/url?id=30352891.mp3",
            cover: "https://p2.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg"
        }
    ],
    // 春节
    [
        {
            name: "春节序曲",
            artist: "中国人民解放军军乐团",
            url: "https://music.163.com/song/media/outer/url?id=395304.mp3",
            cover: "https://p1.music.126.net/j0g_25GyPhar5xxJoGPZiA==/109951163910801634.jpg"
        },
        {
            name: "好运来",
            artist: "祖海",
            url: "https://music.163.com/song/media/outer/url?id=333750.mp3",
            cover: "https://p2.music.126.net/9HMwjKJ28PkHp609d98dJQ==/109951169761022710.jpg"
        },
        {
            name: "好日子",
            artist: "宋祖英 / 群星",
            url: "https://music.163.com/song/media/outer/url?id=5234276.mp3",
            cover: "https://p1.music.126.net/o2uQiqnOV9A-VHvPPEHhjw==/109951169874348518.jpg"
        },
        {
            name: "难忘今宵",
            artist: "李谷一",
            url: "https://music.163.com/song/media/outer/url?id=395334.mp3",
            cover: "https://p1.music.126.net/j0g_25GyPhar5xxJoGPZiA==/109951163910801634.jpg"
        },
        {
            name: "我还有点小糊涂",
            artist: "刘晨",
            url: "https://music.163.com/song/media/outer/url?id=27901231.mp3",
            cover: "https://p1.music.126.net/amPcqTUkdXszKQtEY9WqWw==/109951168835050751.jpg"
        },
    ],
    // ???
    [
        {
            name: "欢乐斗哈基米",
            artist: "困困困困困",
            url: "https://music.163.com/song/media/outer/url?id=2628969575.mp3",
            cover: "https://p1.music.126.net/-t_g6blKCa5OdsC8T4mHeA==/109951169976238666.jpg"
        },
        {
            name: "蓝莲哈",
            artist: "猫猫怕痛惹",
            url: "https://music.163.com/song/media/outer/url?id=2733581267.mp3",
            cover: "https://i2.hdslb.com/bfs/archive/4eb943cea87f05c201c472e1d7e12d2075eb3c4b.jpg"
        },
        {
            name: "๏ เ เ ค เ ๏ ๏ ๏ ๏ ๏ เ ค เ",
            artist: "黑瘦的鱼头",
            url: "https://music.163.com/song/media/outer/url?id=2042083845.mp3",
            cover: "https://i2.hdslb.com/bfs/archive/43520a6f08c77155c90d8894602a26e23913ef3a.jpg"
        },
    ],
    // 哈?
    [
        {
            name: "Arghena",
            artist: "Laur / Feryquitous",
            url: "https://music.163.com/song/media/outer/url?id=2086612075.mp3",
            cover: "https://p2.music.126.net/OT6c2zfUIcO93FGnUe7HGg==/109951168951039968.jpg"
        },
        {
            name: "PRAGMATISM -RESURRECTION-",
            artist: "Laur",
            url: "https://music.163.com/song/media/outer/url?id=1907125216.mp3",
            cover: "https://p1.music.126.net/TyhOfIS34c1YLrTshe1YWg==/109951166856274537.jpg"
        },
        {
            name: "Ringed Genesis",
            artist: "Edelritter",
            url: "https://music.163.com/song/media/outer/url?id=1401852639.mp3",
            cover: "https://p1.music.126.net/u9x0JwJsEpN1Izm6q6877w==/109951164475253709.jpg"
        },
        {
            name: "Straight into the lights",
            artist: "Cosmograph",
            url: "https://music.163.com/song/media/outer/url?id=2628998924.mp3",
            cover: "https://p1.music.126.net/Kp43ZguChSa8Wj-P4zfbiQ==/109951169976456812.jpg"
        },
    ]
];

// 歌单名称
const playlistNames = {
    0: "小甜甜",
    1: "游戏",
    2: "纯音乐",
    3: `
当初是你要分开，分开就分开
现在又要用真爱，把我哄回来
爱情不是你想买，想买就能卖
让我挣开，让我明白，放手你的爱`,
    4: "春节",
    5: "??? 神曲，我懂得欣赏 ???",
    6: "哈?",
    default: "[WARN(歌单-选择-索引越界)] 未定义歌单名称"
};

// 歌单权重设置，权重越大被选中的概率越高
const playlistWeights = [
    0.3, // 小甜甜
    0.9, // 游戏
    1, // 纯音乐
    0.1, // 当初是你要分开，分开就分开
    0.3, // 春节
    0.01, // ???
    0.001, // 哈?
];

// 计算权重总和
const totalWeight = playlistWeights.reduce((sum, w) => sum + w, 0);

// 按加权随机选择歌单索引
function weightedRandomIndex(weights) {
    // 具体概率请见测试文件夹中的概率测试，并将 weights 改为前面定义的歌单权重。
    var r = Math.random() * totalWeight;
    var acc = 0;
    for (var i = 0; i < weights.length; i++) {
        acc += weights[i];
        if (r < acc) return i;
    }
    return weights.length - 1; // fallback
}

// 使用加权随机
const randomPlaylistIndex = weightedRandomIndex(playlistWeights);
const randomPlaylist = playlists[randomPlaylistIndex];

// 获取歌单名称
const SongListSet = playlistNames[randomPlaylistIndex] || playlistNames.default;

if (SongListSet === playlistNames.default) {
    console.warn(`${SongListSet}，随机到的数字是${randomPlaylistIndex}`);
    console.debug("%c[FUN] 不喜欢没有边界感的调用。", "color: #d6aaff;")
} else {
    // 计算该歌单的随机权重百分比，四舍五入保留两位小数，并去掉小数点后面末尾的 0
    const percent = ((playlistWeights[randomPlaylistIndex] / totalWeight) * 100).toFixed(2).replace(/\.?0+$/, '');
    console.log(`[INFO(歌单)] 选中歌单 ${SongListSet} (${percent}%)`);
}

/* -----END----- */

/* 创建 APlayer 对象 */
var ap = new APlayer({
    element: document.getElementById("aplayer"),
    showlrc: false,
    fixed: true,
    mini: true,
    audio: randomPlaylist
});
