import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Playlist } from '../../models/playlist';

interface IProps {
    data: Playlist;
}

const Item: React.FC<IProps> = (props) => {
    const { data } = props;

    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{ uri: data.coverImgUrl }} />
            <View style={styles.right}>
                <Text style={styles.text1}>{data.name}</Text>
                <Text style={styles.text2}>{data.copywriter}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    right: {
        flex: 1,
    },
    text1: {
        marginBottom: 10,
        fontSize: 14,
        color: '#fff',
    },
    text2: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.3)',
    },
});

export default Item;
