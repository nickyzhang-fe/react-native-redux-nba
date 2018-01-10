/**
 * Created by Cral-Gates on 2018/1/4.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    InteractionManager
} from 'react-native';
// import HeaderBar from '../components/HeaderBar';
import Style from '../common/Style';
import Constant from '../common/Constant';
import SwipePages from '../components/SwipePages';
import {GET_MATCH_LIST, GET_SHE_QU_LIST} from '../network/Api';

const swipePages = [
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png')
];

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '2017-01-11'
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.getMatchList())
    }

    static navigationOptions = ({navigation,screenProps}) => ({

    });

    render(){
        return (
            <View style={Style.flex}>
                <SwipePages
                    images={swipePages}
                    height={200}
                    loop={false}
                    autoPlay={false}/>
            </View>
        )
    }

    getMatchList = () => {
        GET_MATCH_LIST(this.state.date, function (res) {
            console.log(res);
        })
    }
}

const styles = StyleSheet.create({

});

export default Game;