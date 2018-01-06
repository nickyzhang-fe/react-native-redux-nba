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
import More from './containers/More';
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
    More: {
        screen: More,
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
    swipeEnabled: true,
    // backBehavior: "none",
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: false,
        activeTintColor: Constant.THEME_COLOR,
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {
            height: 0,
        },
        labelStyle: {
            fontSize: 12,
            marginTop: -3,
            marginBottom: 5,
        },
        iconStyle: {
            marginBottom: 5
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