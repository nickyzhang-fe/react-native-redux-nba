/**
 * Created by Cral-Gates on 2018/1/8.
 */
import React, {Component} from 'react';
import PropType from 'prop-types';
import {
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import Constant from '../common/Constant';

class SwipePages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {images, loop, autoPlay, height} = this.props;
        return (
            <Swiper
                style={{height: height}}
                height={height}
                loop={loop}
                horizontal={true}
                autoplay={autoPlay}
                showsButtons={false}
                autoplayTimeout={4}
                showsPagination={false}
                dot={<View style={styles.dot}/>}
                activeDot={<View style={styles.activeDot}/>}>
                {
                    images.map((item, index) => this.renderImage(item, index, height))
                }
            </Swiper>
        )
    }

    renderImage = (image, index, height) => {
        return (
            <Image key={index} style={{height: height, width: Constant.ScreenWidth}}
                   source={image}/>
        )
    }
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: Constant.TITLE_TEXT_COLOR,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 0,
        marginBottom: 0
    },
    activeDot : {
        backgroundColor: Constant.WHITE,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 0,
        marginBottom: 0
    }
});

SwipePages.propTypes = {
    images: PropType.array.isRequired,
    loop: PropType.bool,
    autoPlay: PropType.bool,
    height: PropType.number
};

SwipePages.defaultProps = {
    loop: false,
    autoPlay: false,
    height: 200
};

export default SwipePages;
