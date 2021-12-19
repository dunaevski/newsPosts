export interface NewsResponse {
    totalResults: number;
    status: string;
    articles: Article[]
}

export interface Article{
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: Tags;
}

export type Tags = { id: null | string, name: string }

export interface ErrorsType {
    status: string;
    code: string;
    message: string;
}
