import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Artist } from '../../models/singer';
import Touchable from '../../components/Touchable';

interface IProps {
    data: Artist;
}

const Item: React.FC<IProps> = (props) => {
    const { data } = props;
    return (
        <Touchable
            onPress={() => {
                console.log(1);
            }}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={{ uri: data.img1v1Url }} />
                <Text style={styles.text}>{data.name}</Text>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingLeft: 30,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    text: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
    },
});

export default Item;
