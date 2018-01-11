/**
 * Created by Cral-Gates on 2018/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    InteractionManager
} from 'react-native';
import Style from '../common/Style';
import Constant from '../common/Constant';
import SwipePages from '../components/SwipePages';
import {GET_MATCH_LIST, GET_SHE_QU_LIST} from '../network/Api';
import Common from '../utils/CommonUtil';

const swipePages = [
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png')
];

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Common.formatDate(new Date().getTime(), 'yyyy-MM-dd')
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.execute());
    }
    /*
    * 获取最近五天比赛情况
    * try-catch防止某个调用失败导致所有的失败
    * */
    async execute() {
        try {
            await this.getMatchList(Common.formatDate(new Date().getTime() - 2*Constant.TimeStamp, 'yyyy-MM-dd'));
            await this.getMatchList(Common.formatDate(new Date().getTime() - Constant.TimeStamp, 'yyyy-MM-dd'));
            await this.getMatchList(this.state.date);
            await this.getMatchList(Common.formatDate(new Date().getTime() + Constant.TimeStamp, 'yyyy-MM-dd'));
            await this.getMatchList(Common.formatDate(new Date().getTime() + 2*Constant.TimeStamp, 'yyyy-MM-dd'));
        } catch (e) {
            console.log(e);
        }

    }

    static navigationOptions = ({navigation, screenProps}) => ({});

    render() {
        return (
            <View style={Style.flex}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <SwipePages
                    images={swipePages}
                    height={200}
                    loop={false}
                    autoPlay={false}/>
            </View>
        )
    }

    getMatchList = async (date) => {
        let that = this;
        await GET_MATCH_LIST(date, function (res) {
            console.log(date);
        }, function (err) {
            console.log(err);
        });
    }
}

const styles = StyleSheet.create({});

export default Game;