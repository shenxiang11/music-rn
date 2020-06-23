import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationProp,
    HeaderStyleInterpolators,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../pages/home';
import Detail from '../pages/detail';
import Mine from '../pages/mine';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import MiniPlayer from '../components/MiniPlayer';
import HeaderTitle from '../components/HeaderTitle';
import HeaderBackground from '../components/HeaderBackground';
import HeaderRight from '../components/HeaderRight';

/**
 * Stack 式的导航
 */
export type RootStackParamList = {
    Home: undefined;
    Mine: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            headerMode="float"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                ...Platform.select({
                    android: {
                        headerStatusBarHeight: StatusBar.currentHeight,
                    },
                }),
                headerBackTitleVisible: false,
                headerTintColor: '#333',
                headerStyle: {
                    ...Platform.select({
                        android: {
                            elevation: 0,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        },
                    }),
                },
            }}>
            <RootStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: '首页',
                }}
            />
            <RootStack.Screen
                name="Mine"
                component={Mine}
                options={{
                    headerTitle: '我的',
                }}
            />
        </RootStack.Navigator>
    );
};

/**
 * Modal 式的导航
 */
export type ModalStackParamList = {
    Root: undefined; // 其他页面
    Detail: undefined; // 播放器页面
};

const ModalStack = createStackNavigator<ModalStackParamList>();
export type ModalStackNavigation = StackNavigationProp<ModalStackParamList>;

const ModalStackScreen = () => {
    return (
        <ModalStack.Navigator
            mode="modal"
            headerMode="screen"
            screenOptions={{
                headerTitle: HeaderTitle,
                headerBackground: HeaderBackground,
                headerRight: () => <HeaderRight />,
            }}>
            <ModalStack.Screen name="Root" component={RootStackScreen} />
            <ModalStack.Screen name="Detail" component={Detail} />
        </ModalStack.Navigator>
    );
};

const navigationRef = React.createRef<NavigationContainerRef>();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <ModalStackScreen />
            <MiniPlayer navigationRef={navigationRef} />
        </NavigationContainer>
    );
};

export default Navigator;
