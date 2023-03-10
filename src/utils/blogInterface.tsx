export interface IBlogDataList {
    _id: string;
    title: string;
    content: string;
    publish: Date;
    img: string;
    category: string;
  }
  
  export interface IBlogResponseList {
    blogs: IBlogDataList[];
    total: number;
    error: boolean;
    page: number;
    limit: number;
  }