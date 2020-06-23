/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconClose = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M592.448 512l409.6 409.6-80.448 80.448-409.6-409.6-409.6 409.6L21.952 921.6l409.6-409.6L21.952 102.4 102.4 21.952l409.6 409.6L914.272 21.952 1002.048 102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconClose.defaultProps = {
  size: 18,
};

export default IconClose;
