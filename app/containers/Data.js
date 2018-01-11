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
import Test1 from '../pages/Test1';
import Test2 from '../pages/Test2';

class More extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    static navigationOptions = ({navigation, screenProps}) => ({});

    render() {
        return (
            <View style={Style.flex}>
                <Text>{'测试数据'}</Text>
            </View>
        )
    }
}

const Tab = TabNavigator({
    Test1: {
        screen: Test1,
        navigationOptions: {
            // header: null,
            headerStyle: {},
            // headerTitleStyle: Styles.headerTitleStyle,
            tabBarLabel: "比赛",
            // tabBarIcon: ({tintColor, focused}) => (
            //     <Image
            //         source={focused ? Constant.GAME_DOWN: Constant.GAME_UP}
            //         style={[styles.icon]}/>
            // ),
        },
    },
    Test2: {
        screen: Test2,
        navigationOptions: {
            // header: null,
            // headerTitle: Constant.TAB_NEW_TXT,
            // headerStyle: Styles.headerStyle,
            // headerTitleStyle: Styles.headerTitleStyle,
            tabBarLabel: "新闻",
            // tabBarIcon: ({tintColor, focused}) => (
            //     <Image
            //         source={focused ? Constant.NEW_DOWN : Constant.NEW_UP}
            //         style={[styles.icon, {tintColor: tintColor}]}/>
            // ),
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

const styles = StyleSheet.create({
    icon: {
        height: Constant.BIG_ICON_SIZE,
        width: Constant.BIG_ICON_SIZE,
        // ...Platform.select({ios: {marginTop: -5}})
    }
});

export default Tab;