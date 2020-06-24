export interface SearchResults {
    code: number;
    data: SearchResult[];
    message: string;
}

export interface SearchResult {
    searchWord: string;
    score: number;
    content: string;
    source: number;
    iconType: number;
    iconUrl: null | string;
    url: string;
}
