// object representation of a news article
export interface NewsArticle {
    id: number;
    /** Unix timestamp in milliseconds */
    date: number;
    title: string;
    intro: string;
    content: string;
    author: string;
}
// object representation of a list of news articles
export type NewsList = NewsArticle[];
