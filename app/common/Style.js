/**
 * Created by Cral-Gates on 2018/1/3.
 *
 * @样式统一处理
 */

import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirectionRow: {
        flexDirection: 'row',
        flex: 1,
    },
    flexDirectionColumn: {
        flexDirection: "column",
        flex: 1,
    }
});

export default styles;