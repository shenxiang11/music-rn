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
import Tabs from '../pages/Tabs';
import Detail from '../pages/detail';
import Mine from '../pages/mine';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import MiniPlayer from '../components/MiniPlayer';
import HeaderTitle from '../components/HeaderTitle';
import HeaderBackground from '../components/HeaderBackground';
import HeaderRight from '../components/HeaderRight';
import Icon from '../components/iconfont';
import Webview from '../pages/Webview';

/**
 * Stack 式的导航
 */
export type RootStackParamList = {
    Tabs: undefined;
    Mine: undefined;
    Webview: {
        url: string;
    };
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
                name="Tabs"
                component={Tabs}
                options={{
                    headerTitle: HeaderTitle,
                    headerBackground: HeaderBackground,
                    headerRight: () => <HeaderRight />,
                    headerBackImage: () => (
                        <View style={styles.fullScreenBack}>
                            <Icon name="back" size={22} color={'#ffcd32'} />
                        </View>
                    ),
                }}
            />
            <RootStack.Screen
                name="Mine"
                component={Mine}
                options={{
                    headerTitle: '我的',
                }}
            />
            <RootStack.Screen
                name="Webview"
                component={Webview}
                options={{
                    headerTitle: '',
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

const styles = StyleSheet.create({
    fullScreenBack: {
        padding: 9,
        transform: [{ rotateZ: '-90deg' }],
    },
});

const ModalStackScreen = () => {
    return (
        <ModalStack.Navigator
            mode="modal"
            headerMode="none"
            screenOptions={{
                header: undefined,
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={styles.fullScreenBack}>
                        <Icon name="back" size={22} color={'#ffcd32'} />
                    </View>
                ),
            }}>
            <ModalStack.Screen
                name="Root"
                component={RootStackScreen}
                options={{ header: undefined }}
            />
            <ModalStack.Screen
                name="Detail"
                component={Detail}
                options={{ headerTitle: undefined, headerRight: undefined }}
            />
        </ModalStack.Navigator>
    );
};

const navigationRef = React.createRef<NavigationContainerRef>();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <ModalStackScreen />
            {/* <MiniPlayer navigationRef={navigationRef} /> */}
        </NavigationContainer>
    );
};

export default Navigator;
