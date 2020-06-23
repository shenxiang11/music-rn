/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'Search' | 'next' | 'playlist' | 'random' | 'sequence' | 'play' | 'prev' | 'add' | 'dismiss' | 'close' | 'music' | 'clear' | 'back' | 'like' | 'mine' | 'loop' | 'pause-mini' | 'not-like' | 'ok' | 'no' | 'pause' | 'play-mini' | 'icon--1';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
