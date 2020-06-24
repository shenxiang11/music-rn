import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListTitle from './ListTitle';
import Carousel from './Carousel';
import request from '../../utils/axios';
import { Banners } from '../../models/banner';
import { useSetRecoilState } from 'recoil';
import { bannersState, playlistsState } from '../../state';
import { Playlists } from 'src/models/playlist';
import { useRecoilState } from 'recoil';
import Item from './Item';

const Recommend = () => {
    const [refresh, setRefresh] = useState(true);
    const setBanners = useSetRecoilState(bannersState);
    const [playlists, setPlaylists] = useRecoilState(playlistsState);

    async function fetchBanners() {
        const res = await request.get<Banners>('/banner?type=2');
        if (res.data.code === 200) {
            setBanners(res.data.banners);
        }
    }
    async function fetchPlaylists() {
        const res = await request.get<Playlists>('/top/playlist/highquality');
        if (res.data.code === 200) {
            setPlaylists(res.data.playlists);
        }
    }

    useEffect(() => {
        setRefresh(true);
        Promise.all([fetchBanners(), fetchPlaylists()]).then(() => {
            setRefresh(false);
        });
    }, []);

    return (
        <FlatList
            style={styles.list}
            ListHeaderComponent={() => (
                <>
                    <Carousel />
                    <ListTitle />
                </>
            )}
            data={playlists}
            keyExtractor={(item) => `${item.id}`}
            refreshing={refresh}
            onRefresh={() => {
                setRefresh(true);
                Promise.all([fetchBanners(), fetchPlaylists()]).then(() => {
                    setRefresh(false);
                });
            }}
            renderItem={({ item }) => <Item data={item} />}
        />
    );
};

const styles = StyleSheet.create({
    list: {},
});

export default Recommend;
