import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainerRef } from '@react-navigation/native';
import { playerFullScreenState } from '../../state';
import { useRecoilState } from 'recoil';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
    navigationRef: React.RefObject<NavigationContainerRef>;
}

const MiniPlayer: React.FC<IProps> = (props) => {
    const { navigationRef } = props;
    const [playerFullScreen, setPlayerFullScreen] = useRecoilState<boolean>(
        playerFullScreenState,
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => {
                    setPlayerFullScreen(true);
                    navigationRef.current?.navigate('Detail');
                }}>
                <View style={styles.miniPlayer}>
                    <Text>{`playerFullScreen: ${JSON.stringify(
                        playerFullScreen,
                    )}`}</Text>
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
