/**
 * Created by Cral-Gates on 2018/1/3.
 */
import {
    Dimensions
} from "react-native";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
const TimeStamp = 1000*60*60*24;
/*
* 颜色
* */
const colors = {
    WHITE: '#FFF',
    BLACK: '#000',
    THEME_COLOR: '#283C87',
    BACKGROUND_COLOR: '#ECECEC',
    TRANSPARENT_COLOR: '#00000000',
    LINE_COLOR: '#D3D3D3',
    PRIMARY_TEXT_COLOR: '#808080',
    TITLE_TEXT_COLOR: '#A9A9A9',
    SUBTITLE_TEXT_COLOR: '#C0C0C0',
    THREE_LEVEL_TEXT_COLOR: '#C4C4C4'
};
/*
* 图片和文字大小统一放到这里
* */
const size = {
    // icon size
    TAB_ICON_SIZE: 20,
    MIN_ICON_SIZE: 10,
    SMALL_ICON_SIZE: 30,
    NORMAL_ICON_SIZE: 40,
    BIG_ICON_SIZE:50,
    LARGE_ICON_SIZE: 80,
    // text size
    MIN_TEXT_SIZE: 10,
    SMALL_TEXT_SIZE: 12,
    NORMAL_TEXT_SIZE: 14,
    BIG_TEXT_SIZE: 16,
    LARGE_TEXT_SIZE: 20,

    STATUS_BAR_HEIGHT: 20,
    NAV_BAR_HEIGHT: 44
};

/*
* 汉字统一放到这里
* */
const string = {
    BACK_TXT: '返回',
    SUBMIT_TXT: '提交',
    TITLE_TXT: '标题',
    COMPLETE_TXT: '完成',
    HOME_TXT: '首页',
    TAB_GAME_TXT: '比赛',
    TAB_NEW_TXT: '新闻',
    TAB_BBS_TXT: '社区',
    TAB_MORE_TXT: '数据',
};

/*
* 首页tab
* */
const tabIcon = {
    GAME_UP: require('../assets/image/tab/game_up.png'),
    GAME_DOWN: require('../assets/image/tab/game_down.png'),
    NEW_UP: require('../assets/image/tab/news_up.png'),
    NEW_DOWN: require('../assets/image/tab/news_down.png'),
    BBS_UP: require('../assets/image/tab/bbs_up.png'),
    BBS_DOWN: require('../assets/image/tab/bbs_down.png'),
    MORE_UP: require('../assets/image/tab/more_up.png'),
    MORE_DOWN: require('../assets/image/tab/more_down.png'),
};

const westForum = [
    {icon: "https://img1.gtimg.com/nba/pics/hv1/135/37/2250/146315820.jpg", name: '勇士', id: 62},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/62/37/2250/146315747.jpg", name: '火箭', id: 70},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/104/37/2250/146315789.jpg", name: '马刺', id: 75},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/52/37/2250/146315737.jpg", name: '湖人', id: 71},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/122/37/2250/146315807.jpg", name: '森林狼', id: 99},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/63/37/2250/146315748.jpg", name: '掘金', id: 119},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/77/37/2250/146315762.jpg", name: '开拓者', id: 80},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/125/37/2250/146315810.jpg", name: '鹈鹕', id: 116},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/194/186/2196/142842524.jpg", name: '爵士', id: 117},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/103/37/2250/146315788.jpg", name: '雷霆', id: 73},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/85/37/2250/146315770.jpg", name: '快船', id: 74},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/123/37/2250/146315808.jpg", name: '太阳', id: 112},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/50/37/2250/146315735.jpg", name: '国王', id: 122},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/58/37/2250/146315743.jpg", name: '灰熊', id: 81},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/126/37/2250/146315811.jpg", name: '小牛', id: 77},
];
/*
 * 东部社区
 * */
const eastForum = [
    {icon: "https://img1.gtimg.com/sports/pics/hv1/78/37/2250/146315763.jpg", name: '凯尔特人', id: 76},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/118/37/2250/146315803.jpg", name: '骑士', id: 61},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/105/37/2250/146315790.jpg", name: '猛龙', id: 125},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/132/37/2250/146315817.jpg", name: '雄鹿', id: 110},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/48/37/2250/146315733.jpg", name: '步行者', id: 83},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/42/37/2250/146315727.jpg", name: '76人', id: 121},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/112/37/2250/146315797.jpg", name: '奇才', id: 79},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/60/37/2250/146315745.jpg", name: '活塞', id: 111},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/110/37/2250/146315795.jpg", name: '尼克斯', id: 100},
    {icon: "https://img1.gtimg.com/nba/pics/hv1/119/37/2250/146315804.jpg", name: '热火', id: 72},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/87/37/2250/146315772.jpg", name: '篮网', id: 113},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/107/37/2250/146315792.jpg", name: '魔术', id: 124},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/56/37/2250/146315741.jpg", name: '黄蜂', id: 114},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/93/37/2250/146315778.jpg", name: '老鹰', id: 82},
    {icon: "https://img1.gtimg.com/sports/pics/hv1/49/37/2250/146315734.jpg", name: '公牛', id: 78}
];

export default {
    ...colors,
    ...size,
    ...string,
    ...tabIcon,
    ScreenWidth,
    ScreenHeight,
    TimeStamp,
    westForum,
    eastForum
}