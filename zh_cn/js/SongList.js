// 网页左下角的歌单
// Song url: https://music.163.com/song/media/outer/url?id=****.mp3 (****处填音乐id)
// APlayer doc: https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0

// 别加歌词别加歌词，弄过了，样式不好弄

/* 
* JS输出分类: 歌单
*/

/* 随机 */
// 歌单列表
var playlists = [
    // Sweet
    [
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
    // 崩铁
    [
        {
            name: "太空漫步",
            artist: "HOYO-MiX",
            url: "https://music.163.com/song/media/outer/url?id=2034615687.mp3",
            cover: "https://p2.music.126.net/RWIGyShmnjmUxizXco6fVg==/109951168505830245.jpg"
        },
    ],
    // 原神
    [
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
    ],
    // 明日方舟
    [
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
            name: "Fallen Angel",
            artist: "UnicornPhantom",
            url: "https://music.163.com/song/media/outer/url?id=2071485908.mp3",
            cover: "https://p2.music.126.net/RnkKxlngZH2A0KEphrBGnw==/109951168826312208.jpg"
        },
        {
            name: "This Is For You",
            artist: "Lukrembo",
            url: "https://music.163.com/song/media/outer/url?id=2119282905.mp3",
            cover: "https://p2.music.126.net/6_oOAFwqRnW1m_S7EZk5OQ==/109951169274100743.jpg"
        },
    ],
    /* 春节
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
        }
    ],
    */
];

// 歌单权重设置，权重越大被选中的概率越高
var playlistWeights = [
    0.8, // 小甜甜
    0.9, // 崩铁
    1, // 原神
    1, // 明日方舟
    1, // 纯音乐
    // 1, // 春节
];
// [ '15.25%', '16.95%', '16.95%', '16.95%', '16.95%', '16.95%' ]

// 计算权重总和
var totalWeight = playlistWeights.reduce((sum, w) => sum + w, 0);

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

/* 日志记录 */
const playlistNames = {
    0: "小甜甜",
    1: "崩铁",
    2: "原神",
    3: "明日方舟",
    4: "纯音乐",
    // 5: "春节...啊？这么快就过节了？？？",
    default: "[WARN(歌单-选择-索引越界)] 未定义歌单名称"
    // 最后更新分类：2025/5/19
};

// 获取歌单名称
const SongListSet = playlistNames[randomPlaylistIndex] || playlistNames.default;

if (SongListSet === playlistNames.default) {
    console.warn(`${SongListSet}，随机到的数字是${randomPlaylistIndex}`);
    console.debug("%c[FUN] 不喜欢没有边界感的调用。", "color: #d6aaff;")
} else {
    console.log(`[INFO(歌单)] 选中歌单 [${SongListSet}]`);
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
