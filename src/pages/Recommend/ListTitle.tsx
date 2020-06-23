import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListTitle = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>热门歌单推荐</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 65,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
    },
    text: {
        fontSize: 14,
        color: '#ffcd32',
    },
});

export default ListTitle;
