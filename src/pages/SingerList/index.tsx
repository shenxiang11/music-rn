import React, { useEffect } from 'react';
import { Text, SectionList, StyleSheet, View } from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { singerlistState, singerlistPageState } from '../../state';
import request from '../../utils/axios';
import { SingerList as SingerListModel } from '../../models/singer';
import Item from './Item';

const SingerList = () => {
    const setSingers = useSetRecoilState(singerlistState);
    const singers = useRecoilValue(singerlistPageState);

    async function fetchSingers() {
        const res = await request.get<SingerListModel>('/toplist/artist');
        if (res.data.code === 200) {
            setSingers(res.data.list.artists);
        }
    }

    useEffect(() => {
        fetchSingers();
    }, []);

    return (
        <SectionList
            style={styles.container}
            sections={singers}
            renderItem={({ item }) => <Item data={item} />}
            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            SectionSeparatorComponent={() => <View style={styles.sep} />}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeader: {
        paddingLeft: 20,
        height: 30,
        lineHeight: 30,
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#333',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    sep: {
        height: 10,
    },
});

export default SingerList;
