/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconClear = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M618.656 877.728c-19.616 0-35.552-16.384-35.552-36.576V365.728c0-20.192 15.936-36.576 35.552-36.576 19.648 0 35.552 16.384 35.552 36.576v475.424c0 20.192-15.904 36.576-35.552 36.576z m-213.344 0c-19.616 0-35.552-16.384-35.552-36.576V365.728c0-20.192 15.936-36.576 35.552-36.576 19.648 0 35.552 16.384 35.552 36.576v475.424c0 20.192-15.904 36.576-35.552 36.576z m-177.76 73.12V219.424h568.896v731.424H227.552z m195.552-804.576V73.12h177.792v73.152h-177.792z m480 0H672V36.544c0-20.192-15.904-36.576-35.552-36.576h-248.896C367.936-0.032 352 16.352 352 36.544v109.728H120.896c-19.616 0-35.584 16.384-35.584 36.576s15.936 36.576 35.584 36.576h35.552v768C156.448 1007.616 172.384 1024 192 1024h640c19.648 0 35.552-16.384 35.552-36.576v-768h35.552c19.648 0 35.552-16.384 35.552-36.576s-15.904-36.576-35.552-36.576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconClear.defaultProps = {
  size: 18,
};

export default IconClear;