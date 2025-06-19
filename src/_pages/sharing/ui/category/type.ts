declare global {
  type CategoryProps = {
    title: string;
    author: {
      avatar: string;
      avatarPreview: string;
      id: number;
      name: string;
    };
    previewUrl: string | null;
  };
}

export {};
