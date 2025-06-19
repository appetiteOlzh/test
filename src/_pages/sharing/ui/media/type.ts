import Player from "video.js/dist/types/player";

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
  duration: number;
  onPlay: (player: Player) => void;
};

declare global {
  type MediaProps = ImageMediaProps | VideoMediaProps;
}

export {};
