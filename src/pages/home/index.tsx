import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ModalStackNavigation, RootStackNavigation } from '../../navigator';

interface IProps {
    navigation: ModalStackNavigation & RootStackNavigation;
}

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

export default Home;
