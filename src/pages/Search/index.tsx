import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from '../../components/iconfont';
import { FlatList } from 'react-native-gesture-handler';
import ListTitle from './ListTitle';
import HotSeach from './HotSearch';
import { useSetRecoilState } from 'recoil';
import { searchResultsState } from '../../state';
import { SearchResults } from '../../models/searchResult';
import request from '../../utils/axios';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const setSearchResults = useSetRecoilState(searchResultsState);

    async function fetchHotResults() {
        const res = await request.get<SearchResults>('/search/hot/detail');
        if (res.data.code === 200) {
            setSearchResults(res.data.data);
        }
    }

    useEffect(() => {
        fetchHotResults();
    }, []);

    return (
        <>
            <View style={styles.searchWrapper}>
                <View style={styles.searchBox}>
                    <Icon name="Search" size={24} color="#222" />
                    <TextInput
                        clearButtonMode="while-editing"
                        style={styles.input}
                        value={searchText}
                        placeholder="搜索歌曲、歌手"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        onChange={(e) => {
                            setSearchText(e.nativeEvent.text);
                        }}
                    />
                </View>
            </View>
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <ListTitle title="热门搜索" />
                        <HotSeach />
                        <ListTitle
                            title="搜索历史"
                            onClearPress={() => {
                                console.log(1);
                            }}
                        />
                    </>
                )}
                data={[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    9,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    9,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    9,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    9,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    9,
                ]}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )}
                keyExtractor={(item) => `${item}`}
            />
        </>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        padding: 20,
    },
    searchBox: {
        height: 40,
        paddingHorizontal: 6,
        backgroundColor: '#333',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        color: '#fff',
    },
});

export default Search;
