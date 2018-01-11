/**
 * Created by Cral-Gates on 2018/1/8.
 */
import React, {Component} from 'react';
import PropType from 'prop-types';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import Constant from '../common/Constant';

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {click, image, title, direction, height, width, color, fontSize} = this.props;
        return (
            <TouchableOpacity onPress={click}>
                <View style={[styles.container, {height: height, width: width, flexDirection: direction}]}>
                    {(<Image style={styles.image} resizeMode="contain" source={{uri: image}}/>)}
                    <Text style={[styles.title, {color: color, fontSize: fontSize}]}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

ImageButton.propTypes = {
    title: PropType.string.isRequired,
    height: PropType.number.isRequired,
    width: PropType.number.isRequired,
    direction: PropType.string,
    image: PropType.node,
    click: PropType.func,
    color: PropType.string,
    fontSize: PropType.number
};

ImageButton.defaultProps = {
    title: '标题',
    color: Constant.BLACK,
    fontSize: Constant.NORMAL_TEXT_SIZE,
    direction: 'row'
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 40,
        ...Platform.select({ios: {borderRadius:20}})
    },
    title: {
        backgroundColor: 'transparent',
        marginTop: 5
    }
});

export default ImageButton;