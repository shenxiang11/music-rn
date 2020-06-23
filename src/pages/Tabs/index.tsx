import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../home';
import Recommend from '../Recommend';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter/src';
import { StyleSheet } from 'react-native';

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
                component={Home}
            />
            <Tab.Screen
                name="tab3"
                options={{ title: '排行' }}
                component={Home}
            />
            <Tab.Screen
                name="tab4"
                options={{ title: '搜索' }}
                component={Home}
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
