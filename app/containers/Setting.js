/**
 * Created by Cral-Gates on 2018/1/4.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Style from '../common/Style';
import Constant from '../common/Constant';

class Setting extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount() {

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
}

export default Setting;