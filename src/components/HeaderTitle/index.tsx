import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = require('../../images/logo.png');

const HeaderTitle = () => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.text}>Chicken Music</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 32,
        marginRight: 9,
    },
    text: {
        fontSize: 18,
        color: '#ffcd32',
    },
});

export default HeaderTitle;
