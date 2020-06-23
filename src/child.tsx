import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useRecoilState, atom } from 'recoil';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '1231231231', // default value (aka initial value)
});

const child1: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useRecoilState(textState);

    return (
        <TouchableHighlight
            onPress={() => {
                setText(`${Math.random()}`);
            }}>
            <View>
                <Text>{text}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default child1;
