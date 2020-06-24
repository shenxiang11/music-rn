import { atom } from 'recoil';
import { Banner } from 'src/models/banner';
import { Playlist } from 'src/models/playlist';

export const playerFullScreenState = atom({
    key: 'playerFullScreen',
    default: false,
});

export const bannersState = atom<Banner[]>({
    key: 'bannersState',
    default: [],
});

export const playlistsState = atom<Playlist[]>({
    key: 'playlistsState',
    default: [],
});
