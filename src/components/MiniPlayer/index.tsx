import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainerRef } from '@react-navigation/native';
import { playerFullScreenState } from '../../state';
import { useRecoilValue } from 'recoil';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
    navigationRef: React.RefObject<NavigationContainerRef>;
}

const MiniPlayer: React.FC<IProps> = (props) => {
    const { navigationRef } = props;
    const playerFullScreen = useRecoilValue<boolean>(playerFullScreenState);

    return !playerFullScreen ? null : (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => {
                    navigationRef.current?.navigate('Detail');
                }}>
                <View style={styles.miniPlayer}>
                    <Text>{`bool: ${playerFullScreen}`}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#333',
    },
    miniPlayer: {
        height: 60,
    },
});

export default React.memo(MiniPlayer);
