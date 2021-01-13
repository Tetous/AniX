import { useEffect, useRef, useState } from "react";
import PlayerProgress from "./PlayerProgress";
import PlayerVolume from "./PlayerVolume";
import PlayerFullscreen from "./PlayerFullscreen";
import PlayerPlay from "./PlayerPlay";

export default function Player({ src, poster }) {
  const [playing, setPlaying] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    if (src) {
      player.setAttribute("src", src);
      player.load();

      setPlaying(true);
      player.play();
    }
  }, [src]);

  return (
    <div className="rounded h-96 shadow relative">
      <video
        ref={playerRef}
        className="h-full w-full object-cover rounded"
        src={src}
        poster={poster}
      />

      {src && (
        <div className="player-container">
          <PlayerPlay
            playing={playing}
            setPlaying={setPlaying}
            player={playerRef.current}
          />
          <PlayerProgress player={playerRef.current} />
          <div className="ml-auto flex items-center">
            <PlayerVolume player={playerRef.current} />
            <PlayerFullscreen player={playerRef.current} />
          </div>
        </div>
      )}
    </div>
  );
}
