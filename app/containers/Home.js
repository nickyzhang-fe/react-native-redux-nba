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
import HeaderBar from '../components/HeaderBar';
import Style from '../common/Style';
import Constant from '../common/Constant';
import {Login} from '../network/Api';

class Home extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.getPlayerInfo())
    }

    render(){
        return (
            <View style={Style.flex}>
                <HeaderBar
                    title={Constant.HOME_TXT}
                    showLeftState={false}
                    showRightState={false}
                    showRightImage={false}/>
                <Text>{'测试数据'}</Text>
            </View>
        )
    }

    getPlayerInfo(){
        Login()
            .then(function (res) {
                alert(res);
            })
            .catch(function (err) {
                alert('err');
            })
    }
}

const styles = StyleSheet.create({

});

export default Home;