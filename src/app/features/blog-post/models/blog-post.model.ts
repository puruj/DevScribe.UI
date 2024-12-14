export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    featuredUImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
}