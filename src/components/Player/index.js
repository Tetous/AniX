import { useEffect, useRef, useState } from "react";
import PlayerProgress from "./PlayerProgress";
import PlayerVolume from "./PlayerVolume";
import PlayerFullscreen from "./PlayerFullscreen";
import PlayerPlay from "./PlayerPlay";
import StyledPlayer from "../../styles/Player";

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
    <StyledPlayer>
      <video ref={playerRef} src={src} poster={poster} />

      {src && (
        <div className="plyr-controls flex-center">
          <PlayerPlay
            playing={playing}
            setPlaying={setPlaying}
            player={playerRef.current}
          />

          <PlayerProgress player={playerRef.current} />
          <PlayerVolume player={playerRef.current} />

          <div className="flex-end">
            <PlayerFullscreen player={playerRef.current} />
          </div>
        </div>
      )}
    </StyledPlayer>
  );
}
