/**
 * Created by Cral-Gates on 2018/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet
} from 'react-native';
import {TabNavigator} from "react-navigation";
import Style from '../common/Style';
import Constant from '../common/Constant';
import RankPages from '../pages/RankListPages';
import DayPages from '../pages/DayListPages';
import PlayerPages from '../pages/PlayerListPages';
import TeamPages from '../pages/TeamListPages';

const Tab = TabNavigator({
    RankPages: {
        screen: RankPages,
        navigationOptions: {
            headerStyle: {},
            tabBarLabel: "球队排行",
        },
    },
    DayPages: {
        screen: DayPages,
        navigationOptions: {
            tabBarLabel: "每日榜单",
        }
    },
    PlayerPages: {
        screen: PlayerPages,
        navigationOptions: {
            tabBarLabel: "球员榜单",
        }
    },
    TeamPages: {
        screen: TeamPages,
        navigationOptions: {
            tabBarLabel: "球队榜单",
        }
    }
}, {
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
    backBehavior: "none",
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        tabStyle: {
            height: 50,
        },
        style: {
            backgroundColor: Constant.THEME_COLOR,
            height: 50,
            borderTopWidth: 0,
            borderTopColor: Constant.TRANSPARENT_COLOR, //设置tab上面的颜色
        },
        indicatorStyle: {
            height: 0,
            backgroundColor: Constant.WHITE,
        },
        labelStyle: {
            fontSize: 16,
            ...Platform.select({ios: {height: 32}, android: {height: 50}})
        },
        iconStyle: {}
    }
});

export default Tab;