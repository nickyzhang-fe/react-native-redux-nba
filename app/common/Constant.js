/**
 * Created by Cral-Gates on 2018/1/3.
 */

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
    HOME_TXT: '首页'
};

export default {
    ...colors,
    ...size,
    ...string
}