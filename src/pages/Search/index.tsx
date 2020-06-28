import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from '../../components/iconfont';
import { FlatList } from 'react-native-gesture-handler';
import ListTitle from './ListTitle';
import HotSeach from './HotSearch';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchResultsState, searchHistoriesState } from '../../state';
import { SearchResults } from '../../models/searchResult';
import request from '../../utils/axios';
import Touchable from '../../components/Touchable';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const setSearchResults = useSetRecoilState(searchResultsState);
    const [searchHistories, setSearchHistories] = useRecoilState(
        searchHistoriesState,
    );
    const searchTextInputRef = React.createRef<TextInput>();

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
                <Touchable
                    style={styles.searchBox}
                    onPress={() => {
                        console.log(searchTextInputRef);
                        searchTextInputRef?.current?.focus();
                    }}>
                    <Icon name="Search" size={24} color="#222" />
                    <TextInput
                        ref={searchTextInputRef}
                        clearButtonMode="while-editing"
                        style={styles.input}
                        value={searchText}
                        placeholder="搜索歌曲、歌手"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        onChange={(e) => {
                            setSearchText(e.nativeEvent.text);
                        }}
                        onSubmitEditing={(e) => {
                            const cur = e.nativeEvent.text;
                            let idx = searchHistories.findIndex(
                                (item) => item === cur,
                            );
                            if (idx >= 0) {
                                setSearchHistories([
                                    cur,
                                    ...searchHistories.filter(
                                        (item) => item !== cur,
                                    ),
                                ]);
                            } else {
                                setSearchHistories([cur, ...searchHistories]);
                            }
                            setSearchText('');
                        }}
                    />
                </Touchable>
            </View>
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <ListTitle title="热门搜索" />
                        <HotSeach />
                        {searchHistories.length > 0 && (
                            <ListTitle
                                title="搜索历史"
                                onClearPress={() => {
                                    setSearchHistories([]);
                                }}
                            />
                        )}
                    </>
                )}
                data={searchHistories}
                renderItem={({ item }) => (
                    <View key={item}>
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

export default React.memo(Search);
