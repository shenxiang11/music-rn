/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPauseMini = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 954.88C266.24 954.88 69.12 755.2 69.12 512S266.24 69.12 512 69.12 954.88 266.24 954.88 512 757.76 954.88 512 954.88z m89.6-601.6c-17.92 0-30.72 15.36-30.72 30.72v256c0 17.92 15.36 30.72 30.72 30.72 17.92 0 30.72-15.36 30.72-30.72v-256c0-17.92-12.8-30.72-30.72-30.72z m-179.2 0c-17.92 0-30.72 15.36-30.72 30.72v256c0 17.92 15.36 30.72 30.72 30.72 17.92 0 30.72-15.36 30.72-30.72v-256c0-17.92-12.8-30.72-30.72-30.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPauseMini.defaultProps = {
  size: 18,
};

export default IconPauseMini;
