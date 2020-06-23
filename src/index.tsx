import React from 'react';
import { RecoilRoot } from 'recoil';
import Navigator from './navigator';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <RecoilRoot>
            <StatusBar barStyle="light-content" />
            <Navigator />
        </RecoilRoot>
    );
};

export default App;
