import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ModalStackNavigation, RootStackNavigation } from '../../navigator';

interface IProps {
    navigation: ModalStackNavigation & RootStackNavigation;
}

export type HomeParamList = {
    tab1: undefined;
    tab2: undefined;
    tab3: undefined;
    tab4: undefined;
};

const Tab = createMaterialTopTabNavigator<HomeParamList>();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="tab1" component={Home} />
            <Tab.Screen name="tab2" component={Home} />
            <Tab.Screen name="tab3" component={Home} />
            <Tab.Screen name="tab4" component={Home} />
        </Tab.Navigator>
    );
};

const Home: React.FC<IProps> = (props) => {
    const { navigation } = props;

    return (
        <>
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate('Detail');
                }}>
                <View>
                    <Text>Home</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => {
                    navigation.push('Mine');
                }}>
                <View>
                    <Text>mine</Text>
                </View>
            </TouchableHighlight>
        </>
    );
};

export default Tabs;
