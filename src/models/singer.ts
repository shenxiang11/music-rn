export interface SingerList {
    list: List;
    code: number;
}

export interface List {
    artists: Artist[];
    updateTime: number;
    type: number;
}

export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: string[];
    trans: string;
    musicSize: number;
    topicPerson: number;
    lastRank: number;
    score: number;
    picId_str?: string;
    img1v1Id_str?: string;
    transNames?: string[];
}
