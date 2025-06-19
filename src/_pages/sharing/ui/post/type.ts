declare global {
  type PostProps = {
    id: number;
    text: string;
    medias: MediaProps[];
    createdAt: string; // date string
  };
  type PostPropsWithAuthor = PostProps & {
    author: {
      id: number;
      avatar: string;
      avatarPreview: string;
      name: string;
    };
  };
}

export {};
