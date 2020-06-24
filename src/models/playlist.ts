export interface Playlists {
    playlists: Playlist[];
    code: number;
    more: boolean;
    lasttime: number;
    total: number;
}

export interface Playlist {
    name: string;
    id: number;
    trackNumberUpdateTime: number;
    status: number;
    userId: number;
    createTime: number;
    updateTime: number;
    subscribedCount: number;
    trackCount: number;
    cloudTrackCount: number;
    coverImgUrl: string;
    coverImgId: number;
    description: string;
    tags: string[];
    playCount: number;
    trackUpdateTime: number;
    specialType: number;
    totalDuration: number;
    creator: Creator;
    tracks: null;
    subscribers: Creator[];
    subscribed: null;
    commentThreadId: string;
    newImported: boolean;
    adType: number;
    highQuality: boolean;
    privacy: number;
    ordered: boolean;
    anonimous: boolean;
    coverStatus: number;
    recommendInfo: null;
    shareCount: number;
    coverImgId_str?: string;
    commentCount: number;
    copywriter: string;
    tag: string;
}

export interface Creator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags: string[] | null;
    experts: { [key: string]: string } | null;
    djStatus: number;
    vipType: number;
    remarkName: null;
    backgroundImgIdStr: string;
    avatarImgIdStr: string;
    avatarImgId_str?: string;
}
