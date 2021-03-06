import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from '../Recommend';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter/src';
import { StyleSheet } from 'react-native';
import SingerList from '../SingerList';
import RankList from '../RankList';
import Search from '../Search';

export type HomeParamList = {
    recommend: undefined;
    tab2: undefined;
    tab3: undefined;
    tab4: undefined;
};

const Tab = createMaterialTopTabNavigator<HomeParamList>();

const Tabs = () => {
    return (
        <Tab.Navigator
            swipeEnabled={false}
            lazy
            pager={(props) => (
                <ViewPagerAdapter style={styles.scene} {...props} />
            )}
            sceneContainerStyle={styles.scene}
            tabBarOptions={{
                activeTintColor: '#ffcd32',
                inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
                contentContainerStyle: {
                    backgroundColor: '#222',
                },
            }}>
            <Tab.Screen
                name="recommend"
                options={{ title: '推荐' }}
                component={Recommend}
            />
            <Tab.Screen
                name="tab2"
                options={{ title: '歌手' }}
                component={SingerList}
            />
            <Tab.Screen
                name="tab3"
                options={{ title: '排行' }}
                component={RankList}
            />
            <Tab.Screen
                name="tab4"
                options={{ title: '搜索' }}
                component={Search}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#222',
    },
});

export default Tabs;
