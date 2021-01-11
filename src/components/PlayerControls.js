import { useRef } from "react";
import PlayerIcon from "./PlayerIcon";

export default function PlayerControls({
  show,
  playerRef,
  forward,
  togglePlay,
  backward,
  playing,
}) {
  const progressRef = useRef(null);

  const scrub = (e) => {
    const progress = progressRef.current;
    const player = playerRef.current;

    const time =
      (e.nativeEvent.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = time;
  };

  return (
    <div className={`player-controls ${show ? "opacity-1" : "opacity-0"}`}>
      <div
        className="cursor-pointer w-full h-1 bg-pink-900"
        ref={progressRef}
        onClick={(e) => scrub(e)}
      >
        <div className="progress-filled h-1 w-0 bg-blue"></div>
      </div>

      <div className="flex items-center justify-between p-4">
        <PlayerIcon icon="backward" onClick={backward} />
        <PlayerIcon icon={playing ? "pause" : "play"} onClick={togglePlay} />
        <PlayerIcon icon="forward" onClick={forward} />
      </div>
    </div>
  );
}
