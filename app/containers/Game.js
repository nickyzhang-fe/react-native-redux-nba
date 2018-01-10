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

const swipePages = [
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png'),
    require('../assets/image/team/gsw.png')
];

class Game extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.getPlayerInfo())
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

    getPlayerInfo(){

    }
}

const styles = StyleSheet.create({

});

export default Game;