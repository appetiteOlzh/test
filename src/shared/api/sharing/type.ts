declare global {
  type UserProps = {
    id: number;
    name: string;
    username: string;
    avatar: string;
    avatarPreview: string;
    phone: string | null;
    about: string | null;
  };
}

export {};
