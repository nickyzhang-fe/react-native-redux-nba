/**
 * Created by Cral-Gates on 2018/1/3.
 */
import {
    Dimensions
} from "react-native";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
/*
* 颜色
* */
const colors = {
    WHITE: '#FFF',
    BLACK: '#000',
    THEME_COLOR: '#283C87',
    BACKGROUND_COLOR: '#ECECEC',
    TRANSPARENT_COLOR: '#00000000',
    LINE_COLOR: '#C4C4C4',
    PRIMARY_TEXT_COLOR: '#808080',
    TITLE_TEXT_COLOR: '#A9A9A9',
    SUBTITLE_TEXT_COLOR: '#C0C0C0',
    THREE_LEVEL_TEXT_COLOR: '#D3D3D3'
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
    TAB_MORE_TXT: '更多',
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

export default {
    ...colors,
    ...size,
    ...string,
    ...tabIcon,
    ScreenWidth,
    ScreenHeight
}