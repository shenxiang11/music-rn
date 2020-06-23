/* eslint-disable */

import React from 'react';

import IconSearch from './IconSearch';
import IconNext from './IconNext';
import IconPlaylist from './IconPlaylist';
import IconRandom from './IconRandom';
import IconSequence from './IconSequence';
import IconPlay from './IconPlay';
import IconPrev from './IconPrev';
import IconAdd from './IconAdd';
import IconDismiss from './IconDismiss';
import IconClose from './IconClose';
import IconMusic from './IconMusic';
import IconClear from './IconClear';
import IconBack from './IconBack';
import IconLike from './IconLike';
import IconMine from './IconMine';
import IconLoop from './IconLoop';
import IconPauseMini from './IconPauseMini';
import IconNotLike from './IconNotLike';
import IconOk from './IconOk';
import IconNo from './IconNo';
import IconPause from './IconPause';
import IconPlayMini from './IconPlayMini';
import IconIcon1 from './IconIcon1';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'Search':
      return <IconSearch {...rest} />;
    case 'next':
      return <IconNext {...rest} />;
    case 'playlist':
      return <IconPlaylist {...rest} />;
    case 'random':
      return <IconRandom {...rest} />;
    case 'sequence':
      return <IconSequence {...rest} />;
    case 'play':
      return <IconPlay {...rest} />;
    case 'prev':
      return <IconPrev {...rest} />;
    case 'add':
      return <IconAdd {...rest} />;
    case 'dismiss':
      return <IconDismiss {...rest} />;
    case 'close':
      return <IconClose {...rest} />;
    case 'music':
      return <IconMusic {...rest} />;
    case 'clear':
      return <IconClear {...rest} />;
    case 'back':
      return <IconBack {...rest} />;
    case 'like':
      return <IconLike {...rest} />;
    case 'mine':
      return <IconMine {...rest} />;
    case 'loop':
      return <IconLoop {...rest} />;
    case 'pause-mini':
      return <IconPauseMini {...rest} />;
    case 'not-like':
      return <IconNotLike {...rest} />;
    case 'ok':
      return <IconOk {...rest} />;
    case 'no':
      return <IconNo {...rest} />;
    case 'pause':
      return <IconPause {...rest} />;
    case 'play-mini':
      return <IconPlayMini {...rest} />;
    case 'icon--1':
      return <IconIcon1 {...rest} />;
  }

  return null;
};

export default IconFont;
