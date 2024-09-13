export interface NoticeInputs {
  title: string;
  posted: Date;
  postedBy: string | undefined;
  content: string;
  _id?: string;
}
export interface PostApiResponse {
  data: {
    message: number;
  };
}

export interface SearchTypes {
  posted?: Date;
  title?: string;
}
