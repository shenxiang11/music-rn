export interface Ranklists {
    code: number;
    list: Rank[];
    artistToplist: ArtistToplist;
}

export interface ArtistToplist {
    coverUrl: string;
    name: string;
    upateFrequency: string;
    position: number;
    updateFrequency: string;
}

export interface Rank {
    subscribers: any[];
    subscribed: null;
    creator: null;
    artists: null;
    tracks: null;
    updateFrequency: string;
    backgroundCoverId: number;
    backgroundCoverUrl: null;
    titleImage: number;
    titleImageUrl: null;
    englishTitle: null;
    opRecommend: boolean;
    recommendInfo: null;
    description: null | string;
    tags: string[];
    status: number;
    ordered: boolean;
    userId: number;
    subscribedCount: number;
    cloudTrackCount: number;
    trackCount: number;
    playCount: number;
    trackNumberUpdateTime: number;
    trackUpdateTime: number;
    createTime: number;
    highQuality: boolean;
    updateTime: number;
    newImported: boolean;
    anonimous: boolean;
    coverImgId: number;
    specialType: number;
    commentThreadId: string;
    coverImgUrl: string;
    privacy: number;
    totalDuration: number;
    adType: number;
    name: string;
    id: number;
    coverImgId_str: string;
    ToplistType?: string;
}
