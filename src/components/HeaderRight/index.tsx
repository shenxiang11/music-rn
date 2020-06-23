import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '../iconfont';
import Touchable from '../Touchable';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../../navigator';

const HeaderRight: React.FC = () => {
    const navigation = useNavigation<RootStackNavigation>();

    return (
        <Touchable
            style={styles.wrapper}
            onPress={() => {
                navigation.push('Mine');
            }}>
            <Icon name="mine" size={20} color="#ffcd32" />
        </Touchable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
    },
});

export default HeaderRight;
