import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import ListTitle from './ListTitle';
import Carousel from './Carousel';
import request from '../../utils/axios';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item({ title }: { title: String }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

const Recommend = () => {
    const [str, setStr] = useState('');

    useEffect(() => {
        request.get('/search?keywords=海阔天空').then((res) => {
            setStr(JSON.stringify(res.data));
        });
    }, []);

    return (
        <FlatList
            style={styles.list}
            ListHeaderComponent={() => (
                <>
                    <Carousel str={str} />
                    <ListTitle />
                </>
            )}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item title={item.title} />}
        />
    );
};

const styles = StyleSheet.create({
    list: {},
});

export default Recommend;
