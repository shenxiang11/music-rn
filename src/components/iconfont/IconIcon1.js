/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconIcon1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M180.224 731.9552h573.44a20.48 20.48 0 0 1 0 40.96h-573.44a20.48 20.48 0 0 1 0-40.96zM180.224 445.2352h286.72a20.48 20.48 0 0 1 0 40.96h-286.72a20.48 20.48 0 0 1 0-40.96zM590.4384 413.4912l-27.2384 27.2384A20.48 20.48 0 0 0 589.824 471.04l2.2528-2.2528 27.2384-27.2384zM939.8272 93.184a20.48 20.48 0 0 0-28.8768 0L619.52 384.6144l28.8768 28.8768L939.8272 122.88a20.48 20.48 0 0 0 0-28.8768z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M856.064 404.2752v409.6a81.92 81.92 0 0 1-81.92 81.92h-573.44a81.92 81.92 0 0 1-81.92-81.92v-573.44a81.92 81.92 0 0 1 81.92-81.92h430.08v-40.96h-430.08a122.88 122.88 0 0 0-122.88 122.88v573.44a122.88 122.88 0 0 0 122.88 122.88h573.44a122.88 122.88 0 0 0 122.88-122.88v-409.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconIcon1.defaultProps = {
  size: 18,
};

export default IconIcon1;
