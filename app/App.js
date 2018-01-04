/**
 * Created by Cral-Gates on 2018/1/3.
 */
import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet
} from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';
import Home from './containers/Home';
import Activity from './containers/Activity';
import Shop from './containers/Shop';
import Setting from './containers/Setting';
import Constant from './common/Constant';

export default Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./assets/image/gsw.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarLabel: '活动',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./assets/image/gsw.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
    Shop: {
        screen: Shop,
        navigationOptions: {
            tabBarLabel: '购物',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./assets/image/gsw.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./assets/image/gsw.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        }
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    // backBehavior: "none",
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true,
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

const styles = StyleSheet.create({
    icon: {
        height: Constant.SMALL_ICON_SIZE,
        width: Constant.SMALL_ICON_SIZE,
        ...Platform.select({ios: {marginTop: -35}})
    }
});