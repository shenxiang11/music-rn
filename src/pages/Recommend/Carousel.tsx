import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
    str: string;
}

const Carousel: React.FC<IProps> = (props) => {
    return (
        <View>
            <Text>{props.str}</Text>
        </View>
    );
};

export default Carousel;
