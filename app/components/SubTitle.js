/**
 * Created by Cral-Gates on 2018/1/8.
 */
import React, {Component} from 'react';
import PropType from 'prop-types';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Constant from '../common/Constant';

class SubTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, subTitle, showRight} = this.props;

        return (
            <View style={SubTitleStyle.container}>
                <View style={[SubTitleStyle.left, {justifyContent: 'flex-start'}]}>
                    <View style={SubTitleStyle.vLine}/>
                    <Text style={SubTitleStyle.title}>{title}</Text>
                </View>
                <View style={[SubTitleStyle.left, {justifyContent: 'flex-end'}]}>
                    {showRight && <Text style={SubTitleStyle.subTitle}>{subTitle}</Text>}
                    {showRight && <Image style={SubTitleStyle.image} source={require('../assets/image/back_right.png')}/>}
                </View>
            </View>
        )
    }
}

SubTitle.propTypes = {
    title: PropType.string.isRequired,
    subTitle: PropType.string,
    showRight: PropType.bool
};

SubTitle.defaultProps = {
    title: '标题',
    subTitle: '副标题',
    showRight: false
};

const SubTitleStyle = StyleSheet.create({
    container: {
        height: 50,
        width: Constant.ScreenWidth - 20,
        flexDirection: 'row',
        marginLeft: 10
    },
    left: {
        height: 50,
        width: (Constant.ScreenWidth - 20) / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    vLine: {
        height: 20,
        width: 4,
        backgroundColor: Constant.THEME_COLOR
    },
    title: {
        color: Constant.BLACK,
        fontSize: Constant.BIG_TEXT_SIZE,
        marginLeft: 10
    },
    subTitle: {
        color: Constant.THREE_LEVEL_TEXT_COLOR,
        fontSize: Constant.NORMAL_TEXT_SIZE,
        marginLeft: 10
    },
    image: {
        height: Constant.TAB_ICON_SIZE,
        width: Constant.TAB_ICON_SIZE
    }
});

export default SubTitle;