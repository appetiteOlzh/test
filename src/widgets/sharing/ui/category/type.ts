declare global {
  type CategoryProps = {
    title: string;
    author: UserProps;
    previewUrl: string | null;
    previewSquareUrl: string | null;
    isPublic: boolean;
    createdAt: string;
  };
}

export {};
