/**
 * Created by Cral-Gates on 2017/5/5.
 */
'use strict';
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';

import Constant from '../common/Constant';

class HeaderBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        onPressRight: PropTypes.func,
        subTitle: PropTypes.string,
        showStateBar: PropTypes.bool,
        showLeftState: PropTypes.bool,
        showRightState: PropTypes.bool,
        showRightImage: PropTypes.bool,
        leftItemTitle: PropTypes.string,
        leftImageSource: PropTypes.node,
        rightItemTitle: PropTypes.string,
        rightImageSource: PropTypes.node
    };

    static defaultProps = {
        title: Constant.TITLE_TXT,
        subTitle: '',
        showStateBar: false,
        showLeftState: true,
        showRightState: false,
        showRightImage: false,
        leftItemTitle: Constant.BACK_TXT,
        rightItemTitle: Constant.COMPLETE_TXT,
        leftImageSource: require('../assets/image/back_left.png'),
        rightImageSource: require('../assets/image/back_right.png')
    };

    render() {
        /*
         * 左边返回键状态
         * */
        let leftItemState = this.props.showLeftState;
        /*
         * 右边状态 true: 文字，false: 图片
         * */
        let rightItemState = this.props.showRightState;
        let showRightImage = this.props.showRightImage;

        Platform.OS === 'ios' ? showStateBar = true : showStateBar = false;

        let showStateBar = (Platform.OS === 'ios');

        return (
            <View style={[styles.container,
                {
                    height: Constant.NAV_BAR_HEIGHT + Constant.STATUS_BAR_HEIGHT,
                    paddingTop: Constant.STATUS_BAR_HEIGHT
                }]}>
                {
                    showStateBar ? (
                        <StatusBar
                            backgroundColor='#283C87'
                            animated={true}
                            translucent={true}
                            hidden={false}
                            barStyle={'light-content'}
                            showHideTransition={'slide'}/>
                    ) : null
                }
                <View>
                    {
                        leftItemState
                            ?
                            <TouchableOpacity onPress={this.props.onPress}>
                                <View style={styles.leftItem}>
                                    <Image style={styles.nav_img} source={this.props.leftImageSource}/>
                                    <Text style={styles.nav_text}>{this.props.leftItemTitle}</Text>
                                </View>
                            </TouchableOpacity>
                            : <View style={{width: 60}}/>
                    }
                </View>
                <View style={styles.nav_title}>
                    <Text style={styles.textStyle} numberOfLines={1}>{this.props.title}</Text>
                </View>
                <View style={styles.rightItem}>
                    < TouchableOpacity onPress={this.props.onPressRight}>
                        {
                            rightItemState
                                ? (showRightImage ?
                                <Image style={styles.nav_img} source={this.props.rightImageSource}/>
                                : <Text style={styles.nav_text}>{this.props.rightItemTitle}</Text>)
                                : null
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Constant.THEME_COLOR,
        alignItems: 'center'
    },
    nav_title: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: Constant.TRANSPARENT_COLOR,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: Constant.LARGE_TEXT_SIZE,
        color: Constant.WHITE,
        textAlign: 'center',
        width: '60%'
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        width: 60
    },
    rightItem: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nav_text: {
        fontSize: Constant.BIG_TEXT_SIZE,
        color: Constant.WHITE
    },
    nav_img: {
        flexDirection: 'row',
        height: Constant.TAB_ICON_SIZE,
        width: Constant.TAB_ICON_SIZE
    },
});

export default HeaderBar;