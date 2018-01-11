/**
 * Created by Cral-Gates on 2018/1/11.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Style from '../common/Style';
import Constant from '../common/Constant';
import ImageButton from '../components/ImageButton';
import SubTitle from '../components/SubTitle';

class TeamListPages extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    static navigationOptions = ({navigation, screenProps}) => ({});

    render() {
        return (
            <ScrollView
                style={[Style.flex ]}
                showsVerticalScrollIndicator={false}>
                <SubTitle title="西部" showRight={false}/>

                <SubTitle title="东部" showRight={false}/>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Constant.ScreenWidth,
        height: 240,
        borderBottomWidth: 1,
        borderBottomColor: Constant.LINE_COLOR,
        borderTopWidth: 1,
        borderTopColor: Constant.LINE_COLOR
    }
});

export default TeamListPages;