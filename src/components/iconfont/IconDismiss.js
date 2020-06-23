/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconDismiss = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024C229.216 1024 0 794.784 0 512S229.216 0 512 0s512 229.216 512 512-229.216 512-512 512z m-7.104-564.352L301.248 256 256 301.248l203.648 203.648L256 708.544l45.248 45.248 203.648-203.648 203.648 203.648 45.248-45.248-203.648-203.648 203.648-203.648L708.544 256l-203.648 203.648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDismiss.defaultProps = {
  size: 18,
};

export default IconDismiss;
