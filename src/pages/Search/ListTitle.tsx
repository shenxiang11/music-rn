import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../../components/iconfont';
import Touchable from '../../components/Touchable';

interface IProps {
    title: string;
    onClearPress?: () => void;
}

const ListTitle: React.FC<IProps> = (props) => {
    const { title, onClearPress } = props;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            {onClearPress && (
                <Touchable
                    onPress={() => {
                        onClearPress();
                    }}>
                    <Icon
                        name="clear"
                        size={14}
                        color="rgba(255, 255, 255, 0.3)"
                    />
                </Touchable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
    },
});

export default ListTitle;
