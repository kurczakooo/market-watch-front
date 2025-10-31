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

// props for NewsBlock component
export interface NewsBlockProps {
    article: NewsArticle;
    index: number;
    selected?: boolean;
}

// emits for NewsBlock component
export interface NewsBlockEmits {
    (e: 'select', index: number): void;
}
