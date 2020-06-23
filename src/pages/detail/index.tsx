import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ModalStackNavigation } from '../../navigator';
import { useRecoilState } from 'recoil';
import { playerFullScreenState } from '../../state';

interface IProps {
    navigation: ModalStackNavigation;
}

const Detail: React.FC<IProps> = () => {
    const [, setPlayerFullScreen] = useRecoilState<boolean>(
        playerFullScreenState,
    );

    useEffect(() => {
        setPlayerFullScreen(true);
        return () => {
            setPlayerFullScreen(false);
        };
    }, [setPlayerFullScreen]);

    return (
        <View>
            <Text>Detail</Text>
        </View>
    );
};

export default Detail;
