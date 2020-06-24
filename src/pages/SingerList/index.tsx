import React, { useEffect, useState } from 'react';
import {
    Text,
    SectionList,
    StyleSheet,
    View,
    GestureResponderEvent,
} from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
    singerlistState,
    singerlistPageState,
    azlistDataState,
} from '../../state';
import request from '../../utils/axios';
import { SingerList as SingerListModel } from '../../models/singer';
import Item from './Item';

const AZ_HEIGHT = 18;

const SingerList = () => {
    const [activedIndex, setActivedIndex] = useState(0);
    const setSingers = useSetRecoilState(singerlistState);
    const singers = useRecoilValue(singerlistPageState);
    const azlistData = useRecoilValue(azlistDataState);
    const sectionListRef = React.createRef<SectionList>();

    const [startTouchY, setStartTouchY] = useState(0);

    async function fetchSingers() {
        const res = await request.get<SingerListModel>('/toplist/artist');
        if (res.data.code === 200) {
            setSingers(res.data.list.artists);
        }
    }

    function scrollSectionList(event: GestureResponderEvent, index: number) {
        if (event.nativeEvent.touches[0]) {
            let currentTouchY = event.nativeEvent.touches[0].pageY;
            let idx =
                index + Math.floor((currentTouchY - startTouchY) / AZ_HEIGHT);

            if (idx >= singers.length - 1) {
                idx = singers.length - 1;
            }

            sectionListRef?.current?.scrollToLocation({
                sectionIndex: idx,
                itemIndex: 0,
            });
            setActivedIndex(idx);
        }
    }

    useEffect(() => {
        fetchSingers();
    }, []);

    return (
        <View style={styles.container}>
            <SectionList
                ref={sectionListRef}
                sections={singers}
                renderItem={({ item }) => <Item data={item} />}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                SectionSeparatorComponent={() => <View style={styles.sep} />}
                keyExtractor={(item) => `${item.id}`}
            />
            <View style={styles.azListWrapper}>
                <View style={styles.azList}>
                    {azlistData.map((item, index) => (
                        <View
                            key={item}
                            onStartShouldSetResponder={() => true}
                            onMoveShouldSetResponder={() => true}
                            onResponderGrant={(event) => {
                                setStartTouchY(
                                    event.nativeEvent.touches[0].pageY,
                                );
                                scrollSectionList(event, index);
                            }}
                            onResponderMove={(event) => {
                                scrollSectionList(event, index);
                            }}
                            onResponderRelease={(event) => {
                                scrollSectionList(event, index);
                            }}>
                            <Text
                                style={[
                                    styles.az,
                                    index === activedIndex && styles.activeAz,
                                ]}>
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
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
    azListWrapper: {
        position: 'absolute',
        right: 0,
        width: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    azList: {
        paddingVertical: 20,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
    },
    az: {
        width: '100%',
        height: AZ_HEIGHT,
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    activeAz: {
        color: '#ffcd32',
    },
});

export default SingerList;
