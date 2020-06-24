import React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigator';

type WebviewRouteProp = RouteProp<RootStackParamList, 'Webview'>;

const Webview = () => {
    const route = useRoute<WebviewRouteProp>();

    return <WebView source={{ uri: route.params.url }} />;
};

export default Webview;
