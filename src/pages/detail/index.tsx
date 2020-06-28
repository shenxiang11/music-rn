import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ModalStackNavigation } from '../../navigator';
import { useRecoilState } from 'recoil';
import { playerFullScreenState } from '../../state';

interface IProps {
    navigation: ModalStackNavigation;
}

const Detail: React.FC<IProps> = () => {
    const [playerFullScreen, setPlayerFullScreen] = useRecoilState<boolean>(
        playerFullScreenState,
    );

    useEffect(() => {
        return () => {
            setPlayerFullScreen(false);
        };
    }, []);

    return (
        <View>
            <Text>Detail: {`${playerFullScreen}`}</Text>
        </View>
    );
};

export default Detail;
