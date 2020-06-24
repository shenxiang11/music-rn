import { atom, selector } from 'recoil';
import { Banner } from '../models/banner';
import { Playlist } from '../models/playlist';
import { Artist } from '../models/singer';
import pinyin, { STYLE_FIRST_LETTER } from 'pinyin';
import { Rank } from 'src/models/rank';
import { SearchResult } from 'src/models/searchResult';

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

export const singerlistState = atom<Artist[]>({
    key: 'singerlistState',
    default: [],
});

export interface ISingerlistPageProp {
    title: string;
    data: Artist[];
}

export const singerlistPageState = selector<ISingerlistPageProp[]>({
    key: 'singerlistPageState',
    get: ({ get }) => {
        const singerList = get(singerlistState);
        let arr: ISingerlistPageProp[] = [];

        let hot: ISingerlistPageProp = {
            title: '热门',
            data: [],
        };

        singerList.forEach((singer, idx) => {
            if (idx < 10) {
                hot.data.push(singer);
            } else {
                const title = pinyin(singer.name[0], {
                    style: STYLE_FIRST_LETTER,
                })[0][0].toUpperCase();
                let index = arr.findIndex((item) => item.title === title);
                if (index >= 0) {
                    arr[index].data.push(singer);
                } else {
                    arr.push({
                        title,
                        data: [singer],
                    });
                }
            }
        });

        arr = arr.sort(
            (prev, next) => prev.title.charCodeAt(0) - next.title.charCodeAt(0),
        );

        return [hot, ...arr];
    },
});

export const azlistDataState = selector<string[]>({
    key: 'azlistDataState',
    get: ({ get }) => {
        const singerList = get(singerlistPageState);
        return singerList.map((item) => item.title[0]);
    },
});

export const ranklistState = atom<Rank[]>({
    key: 'ranklistState',
    default: [],
});

export const searchResultsState = atom<SearchResult[]>({
    key: 'searchResultsState',
    default: [],
});
