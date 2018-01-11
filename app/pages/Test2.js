/**
 * Created by Cral-Gates on 2018/1/4.
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

class Setting extends Component {
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
                <View style={styles.container}>
                    {
                        Constant.westForum.map((item, index) => this.renderItem(item, index))
                    }
                </View>

                <SubTitle title="东部" showRight={false}/>
                <View style={styles.container}>
                    {
                        Constant.eastForum.map((item, index) => this.renderItem(item, index))
                    }
                </View>

            </ScrollView>
        )
    }

    renderItem = (item, index) => {
        return (
            <ImageButton
                key={index}
                image={item.icon}
                title={item.name}
                height={80}
                direction={'column'}
                width={(Constant.ScreenWidth)/5}/>
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

export default Setting;