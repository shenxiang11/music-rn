import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import { searchResultsState } from '../../state';

const HotSeach = () => {
    const searchResults = useRecoilValue(searchResultsState);

    return (
        <View style={styles.wrapper}>
            {searchResults.map((searchResult) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{searchResult.searchWord}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 20,
    },
    item: {
        backgroundColor: '#333',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 6,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 14,
    },
});

export default HotSeach;
