import React from 'react';
import { View, Text } from 'react-native';
import { ModalStackNavigation } from '../../navigator';

interface IProps {
    navigation: ModalStackNavigation;
}

const Mine: React.FC<IProps> = () => {
    return (
        <View>
            <Text>Mine</Text>
        </View>
    );
};

export default Mine;
