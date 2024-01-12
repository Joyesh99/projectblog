export interface Post {
    id: number;
    title: string;
    content: string;
    summary: string;
    comments: Comment[];
  }