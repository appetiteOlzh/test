import Image from "next/image";
import PlayIcon from "./icon/play.svg";
import PauseIcon from "./icon/pause.svg";
import { CustomProgress } from "./custom-progress";

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
};

export const CustomControls = ({
  currentTime,
  duration,
  onSeek,
  isPlaying,
  onTogglePlay,
}: Props) => {
  return (
    <div className="w-full flex items-center">
      <div className="pr-3 flex-none">
        {!isPlaying ? (
          <button onClick={onTogglePlay} className="w-11 h-11 p-2.5 -mx-2.5">
            <Image
              src={PlayIcon}
              alt="▶ Play"
              className="w-full h-full object-contain object-center"
            />
          </button>
        ) : (
          <button onClick={onTogglePlay} className="w-11 h-11 p-2.5 -mx-2.5">
            <Image
              src={PauseIcon}
              alt="❚❚ Pause"
              className="w-full h-full object-contain object-center"
            />
          </button>
        )}
      </div>

      <CustomProgress
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
      />
    </div>
  );
};
