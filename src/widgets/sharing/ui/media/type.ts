type BaseMediaProps = {
  id: number;
  url: string;
  previewUrl: string;
  height: number;
  width: number;
};

type ImageMediaProps = BaseMediaProps & { type: "image" };
type VideoMediaProps = BaseMediaProps & {
  type: "video";
  duration: string;
};

declare global {
  type MediaProps = ImageMediaProps | VideoMediaProps;
}

export {};
