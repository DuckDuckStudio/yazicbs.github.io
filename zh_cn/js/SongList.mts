// 网页左下角的歌单
// APlayer doc: https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0
// 别加歌词别加歌词，弄过了，样式不好弄

/* 
* JS输出分类: 歌单
*/

/* 随机 */
// 歌单列表
const playlists = [
    // 游戏
    [
        {
            name: "太空漫步",
            artist: "HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/HOYO-MiX%20-%20太空漫步.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/HOYO-MiX%20-%20太空漫步.jpg"
        },
        {
            name: "柔灯轻漾时",
            artist: "HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/HOYO-MiX%20-%20柔灯轻漾时.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/HOYO-MiX%20-%20柔灯轻漾时.jpg"
        },
        {
            name: "不再年轻的村庄（轻策夜间）",
            artist: "陈致逸、HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/陈致逸、HOYO-MiX%20-%20不再年轻的村庄（轻策夜间）.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/陈致逸、HOYO-MiX%20-%20不再年轻的村庄（轻策夜间）.jpg"
        },
        {
            name: "清泉之诗",
            artist: "HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/HOYO-MiX%20-%20清泉之诗.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/HOYO-MiX%20-%20清泉之诗.jpg"
        },
        {
            name: "风轻云暖",
            artist: "HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/HOYO-MiX%20-%20风轻云暖.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/HOYO-MiX%20-%20风轻云暖.jpg"
        },
        {
            name: "清润玉响",
            artist: "HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/HOYO-MiX%20-%20清润玉响.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/HOYO-MiX%20-%20清润玉响.jpg"
        },
        {
            name: "品茗尝清心（望舒昼间）",
            artist: "陈致逸、HOYO-MiX",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/陈致逸、HOYO-MiX%20-%20品茗尝清心（望舒昼间）.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/陈致逸、HOYO-MiX%20-%20品茗尝清心（望舒昼间）.jpg"
        },
        {
            name: "相见欢",
            artist: "塞壬唱片-MSR、MeLo_绿萝组",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/塞壬唱片-MSR、MeLo_绿萝组%20-%20相见欢.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/塞壬唱片-MSR、MeLo_绿萝组%20-%20相见欢.jpg"
        },
        {
            name: "不存在的乐园",
            artist: "塞壬唱片-MSR、Erik Castro",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/塞壬唱片-MSR、Erik%20Castro%20-%20不存在的乐园.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/塞壬唱片-MSR、Erik%20Castro%20-%20不存在的乐园.jpg"
        },
        {
            name: "赴大荒",
            artist: "塞壬唱片-MSR、Kirara Magic",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/游戏/塞壬唱片-MSR、Kirara%20Magic%20-%20赴大荒.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/游戏/塞壬唱片-MSR、Kirara%20Magic%20-%20赴大荒.jpg"
        },
    ],
    // 纯音乐
    [
        {
            name: "Groovy Hammond",
            artist: "Aiert Erkoreka",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/纯音乐/Aiert%20Erkoreka%20-%20Groovy%20Hammond.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/纯音乐/Aiert%20Erkoreka%20-%20Groovy%20Hammond.jpg"
        },
        {
            name: "This Is For You",
            artist: "Lukrembo",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/纯音乐/Lukrembo%20-%20This%20Is%20For%20You.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/纯音乐/Lukrembo%20-%20This%20Is%20For%20You.jpg"
        },
        {
            name: "小樱",
            artist: "饭碗的彼岸",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/纯音乐/饭碗的彼岸%20-%20小樱.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/纯音乐/饭碗的彼岸%20-%20小樱.jpg"
        },
        {
            name: "風の住む街",
            artist: "原作：磯村由紀子、演奏：浅绯色的喵", // 原作网易云上要 VIP
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/纯音乐/原作：磯村由紀子、演奏：浅绯色的喵%20-%20風の住む街.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/纯音乐/原作：磯村由紀子、演奏：浅绯色的喵%20-%20風の住む街.jpg"
        },
        {
            name: "没有共产党就没有新中国",
            artist: "中国之声结束曲",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/纯音乐/中国之声结束曲%20-%20没有共产党就没有新中国.m4a",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/纯音乐/中国之声结束曲%20-%20没有共产党就没有新中国.jpg"
        },
    ],
    // 春节
    [
        {
            name: "我爱你中国弦乐版",
            artist: "徐鲤",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/徐鲤%20-%20我爱你中国弦乐版.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/徐鲤%20-%20我爱你中国弦乐版.jpg"
        },
        {
            name: "春节序曲",
            artist: "中国人民解放军军乐团",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/中国人民解放军军乐团%20-%20春节序曲.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/中国人民解放军军乐团%20-%20春节序曲.jpg"
        },
        {
            name: "福到财到好运来",
            artist: "小琢",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/小琢%20-%20福到财到好运来.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/小琢%20-%20福到财到好运来.jpg"
        },
        {
            name: "好春天（翻自 舒岩）",
            artist: "何欢浪",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/何欢浪%20-%20好春天（翻自%20舒岩）.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/何欢浪%20-%20好春天（翻自%20舒岩）.jpg"
        },
        {
            name: "新年大吉",
            artist: "张朋娜",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/张朋娜%20-%20新年大吉.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/张朋娜%20-%20新年大吉.jpg"
        },
        {
            name: "好运来",
            artist: "祖海",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/祖海%20-%20好运来.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/祖海%20-%20好运来.jpg"
        },
        {
            name: "好日子",
            artist: "宋祖英、群星",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/宋祖英、群星%20-%20好日子.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/宋祖英、群星%20-%20好日子.jpg"
        },
        {
            name: "难忘今宵",
            artist: "李谷一",
            url: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Audios/Songs/春节/李谷一%20-%20难忘今宵.mp3",
            cover: "https://duckduckstudio.github.io/yazicbs.github.io/Assets/Images/Songs/春节/李谷一%20-%20难忘今宵.jpg"
        },
    ],
];

// 歌单名称
const playlistNames: Record<number, string> & { default: string } = {
    0: "游戏",
    1: "纯音乐",
    2: "春节",
    default: "[WARN(歌单-选择-索引越界)] 未定义歌单名称"
};

// 歌单权重设置，权重越大被选中的概率越高
const playlistWeights = [
    1, // 游戏
    1, // 纯音乐
    0.1, // 春节
];

// 计算权重总和
const totalWeight = playlistWeights.reduce((sum, w) => sum + w, 0);

// 按加权随机选择歌单索引
function weightedRandomIndex(weights: number[]): number {
    // 具体概率请见测试文件夹中的概率测试，并将 weights 改为前面定义的歌单权重。
    const r = Math.random() * totalWeight;
    let acc = 0;
    for (let i = 0; i < weights.length; i++) {
        acc += weights[i]!;
        if (r < acc) return i;
    }
    return weights.length - 1; // fallback (ts2366)
}

// 使用加权随机
const randomPlaylistIndex = weightedRandomIndex(playlistWeights);
const randomPlaylist = playlists[randomPlaylistIndex];

// 获取歌单名称
const SongListSet = playlistNames[randomPlaylistIndex] || playlistNames.default;

if (SongListSet === playlistNames.default) {
    console.warn(`${SongListSet}，随机到的数字是${randomPlaylistIndex}`);
    console.debug("%c[FUN] 不喜欢没有边界感的调用。", "color: #d6aaff;");
} else {
    // 计算该歌单的随机权重百分比，四舍五入保留两位小数，并去掉小数点后面末尾的 0
    const percent = ((playlistWeights[randomPlaylistIndex]! / totalWeight) * 100).toFixed(2).replace(/\.?0+$/, '');
    console.log(`[INFO(歌单)] 选中歌单 ${SongListSet} (${percent}%)`);
}

/* -----END----- */

/* 创建 APlayer 对象 */
declare const APlayer: any; // eslint-disable-line @typescript-eslint/no-explicit-any
// @ts-expect-error: 6133
const ap = new APlayer({ // eslint-disable-line @typescript-eslint/no-unused-vars
    element: document.getElementById("aplayer"),
    showlrc: false,
    fixed: true,
    mini: true,
    audio: randomPlaylist
});
