/**
 * Created by Cral-Gates on 2018/1/3.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import Game from './containers/Game';
import New from './containers/New';
import BBS from './containers/BBS';
import Data from './containers/Data';
import Styles from './common/Style';
import Constant from './common/Constant';

const Tab = TabNavigator({
    Game: {
        screen: Game,
        navigationOptions: {
            headerTitle: Constant.TAB_GAME_TXT,
            headerStyle: Styles.headerStyle,
            headerTitleStyle: Styles.headerTitleStyle,
            // tabBarLabel: '比赛',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? Constant.GAME_DOWN: Constant.GAME_UP}
                    style={[styles.icon]}/>
            ),
        },
    },
    New: {
        screen: New,
        navigationOptions: {
            headerTitle: Constant.TAB_NEW_TXT,
            headerStyle: Styles.headerStyle,
            headerTitleStyle: Styles.headerTitleStyle,
            // tabBarLabel: '新闻',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? Constant.NEW_DOWN : Constant.NEW_UP}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
    BBS: {
        screen: BBS,
        navigationOptions: {
            headerTitle: Constant.TAB_BBS_TXT,
            headerStyle: Styles.headerStyle,
            headerTitleStyle: Styles.headerTitleStyle,
            // tabBarLabel: '社区',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? Constant.BBS_DOWN : Constant.BBS_UP}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
    Data: {
        screen: Data,
        navigationOptions: {
            headerTitle: Constant.TAB_MORE_TXT,
            headerStyle: Styles.headerStyle,
            headerTitleStyle: Styles.headerTitleStyle,
            // tabBarLabel: '更多',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? Constant.MORE_DOWN : Constant.MORE_UP}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    // backBehavior: "none",
    tabBarOptions: {
        mode: 'card',
        upperCaseLabel: false,
        showIcon: true,
        showLabel: false,
        activeTintColor: Constant.THEME_COLOR,
        inactiveTintColor: Constant.PRIMARY_TEXT_COLOR,
        tabStyle: {
            height: 55,  //防止Android上图片溢出
        },
        style: {
            backgroundColor: Constant.WHITE,
            height: 55,
            // borderTopWidth: 24,
            // borderTopColor: 'red', // StatusBar color
            borderTopColor: Constant.THEME_COLOR, //设置tab上面的颜色
        },
        indicatorStyle: {
            height:0,
        },
        iconStyle: {
            height: 55
        }
    }
});

export default  MyApp = StackNavigator({
    Tab:{
        screen:Tab,
    }
});

const styles = StyleSheet.create({
    icon: {
        height: Constant.BIG_ICON_SIZE,
        width: Constant.BIG_ICON_SIZE,
        // ...Platform.select({ios: {marginTop: -5}})
    }
});