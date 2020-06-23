/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconSearch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M861.856 810.656l-217.6-217.6c34.144-42.656 55.456-98.144 55.456-162.144 0-149.344-119.456-268.8-268.8-268.8s-268.8 119.456-268.8 268.8 119.456 268.8 268.8 268.8c59.744 0 115.2-21.344 162.144-55.456L806.4 857.6l55.456-46.944z m-652.8-379.712c0-119.456 98.144-217.6 221.856-217.6s221.856 98.144 221.856 221.856-98.144 221.856-221.856 221.856-221.856-102.4-221.856-226.144z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSearch.defaultProps = {
  size: 18,
};

export default IconSearch;
