import { atom } from 'recoil';
import { Banner } from 'src/models/banner';

export const playerFullScreenState = atom({
    key: 'playerFullScreen',
    default: false,
});

export const bannersState = atom<Banner[]>({
    key: 'bannersState',
    default: [],
});
