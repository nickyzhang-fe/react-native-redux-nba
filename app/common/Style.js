/**
 * Created by Cral-Gates on 2018/1/3.
 *
 * @样式统一处理
 */

import {
    StyleSheet,
    Dimensions,
    Platform,
    StatusBar
} from "react-native";
import Constant from './Constant';

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const navBarHeight = (Platform.OS === 'ios') ? Constant.IOS_NAV_HEADER_HEIGHT : Constant.AND_NAV_HEADER_HEIGHT;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirectionRow: {
        flex: 1,
        flexDirection: 'row'
    },
    flexDirectionColumn: {
        flex: 1,
        flexDirection: "column"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    smallText: {
        color: Constant.PRIMARY_TEXT_COLOR,
        fontSize: Constant.SMALL_TEXT_SIZE
    },
    smallTextWhite: {
        color: Constant.WHITE,
        fontSize: Constant.SMALL_TEXT_SIZE
    },
    normalText: {
        color: Constant.PRIMARY_TEXT_COLOR,
        fontSize: Constant.NORMAL_TEXT_SIZE
    },
    normalTextWhite: {
        color: Constant.WHITE,
        fontSize: Constant.NORMAL_TEXT_SIZE
    },
    bigText: {
        color: Constant.PRIMARY_TEXT_COLOR,
        fontSize: Constant.BIG_TEXT_SIZE
    },
    bigTextWhite: {
        color: Constant.WHITE,
        fontSize: Constant.BIG_TEXT_SIZE
    },
    largeText: {
        color: Constant.PRIMARY_TEXT_COLOR,
        fontSize: Constant.LARGE_TEXT_SIZE
    },
    largeTextWhite: {
        color: Constant.WHITE,
        fontSize: Constant.LARGE_TEXT_SIZE
    }
});

export default styles;