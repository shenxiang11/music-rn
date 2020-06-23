import React from 'react';
import { View, StyleSheet } from 'react-native';

const HeaderBackground = () => {
    return <View style={styles.wrapper} />;
};

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#222',
    },
});

export default HeaderBackground;
