declare global {
  type AlbumProps = {
    id: number;
    title: string;
    postCount: number;
    mediaFileUserId: number;
    createdAt: string;
    author: {
      avatar: string | null;
      avatarPreview: string | null;
      id: number;
      name: string;
      phone: string | null;
      about: string | null;
      username: string | null;
    };
    previewUrl?: string | null;
    previewSquareUrl?: string | null;
  };
}

export {};
