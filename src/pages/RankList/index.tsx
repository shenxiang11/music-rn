import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Ranklists } from '../../models/rank';
import request from '../../utils/axios';
import { ranklistState } from '../../state';
import { useRecoilState } from 'recoil';
import Item from './Item';

const RankList = () => {
    const [ranklist, setRanklist] = useRecoilState(ranklistState);

    async function fetchRanks() {
        const res = await request.get<Ranklists>('/toplist');
        if (res.data.code === 200) {
            setRanklist(res.data.list);
        }
    }

    useEffect(() => {
        fetchRanks();
    }, []);

    return (
        <FlatList
            data={ranklist}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

export default RankList;
