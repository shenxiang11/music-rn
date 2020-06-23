import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { bannersState } from '../../state';
import Swiper from 'react-native-swiper';

const Carousel: React.FC = () => {
    const banners = useRecoilValue(bannersState);

    return (
        <Swiper
            style={styles.wrapper}
            paginationStyle={styles.pagination}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}>
            {banners.map((banner) => (
                <Image
                    key={banner.bannerId}
                    style={styles.image}
                    source={{ uri: banner.pic }}
                />
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: (Dimensions.get('screen').width / 1080) * 420,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    image: {
        flex: 1,
        backgroundColor: 'red',
    },
    pagination: {
        bottom: 12,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    activeDot: {
        width: 20,
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});

export default Carousel;
