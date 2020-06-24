import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Rank } from 'src/models/rank';

interface IProps {
    data: Rank;
}

const Item: React.FC<IProps> = (props) => {
    const { data } = props;
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{ uri: data.coverImgUrl }} />
            <View style={styles.right}>
                <Text style={styles.name}>{data.name}</Text>
                <Text
                    style={styles.description}
                    lineBreakMode="tail"
                    numberOfLines={2}>
                    {data.description}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
    right: {
        flex: 1,
        padding: 20,
    },
    name: {
        marginBottom: 10,
        fontSize: 14,
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.3)',
    },
});

export default Item;
