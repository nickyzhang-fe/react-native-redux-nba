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
                <Text>{'测试数据'}</Text>
            </View>
        )
    }

    getPlayerInfo(){

    }
}

const styles = StyleSheet.create({

});

export default Game;