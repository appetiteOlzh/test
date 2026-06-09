declare global {
  type PostProps = {
    id: number;
    text: string;
    medias: MediaProps[];
    createdAt: string; // date string
  };
  type PostPropsWithAuthor = PostProps & {
    author: UserProps;
  };
}

export {};
