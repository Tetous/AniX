import { useEffect, useRef, useState } from "react";
import PlayerProgress from "./PlayerProgress";
import PlayerVolume from "./PlayerVolume";
import PlayerFullscreen from "./PlayerFullscreen";
import PlayerPlay from "./PlayerPlay";
import StyledPlayer from "../../styles/Player";

export default function Player({ src, poster }) {
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(null);
  const [moveUp, setMoveUp] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const toggleControls = () => setShowControls(!showControls);

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
    <StyledPlayer moveUp={moveUp} src={src} onClick={toggleControls}>
      <video ref={playerRef} src={src} poster={poster} />

      {src && showControls && (
        <div className="player-controls flex-between">
          <PlayerPlay
            playing={playing}
            setPlaying={setPlaying}
            player={playerRef.current}
          />

          <PlayerProgress player={playerRef.current} />
          <PlayerVolume player={playerRef.current} />

          <div className="flex-end">
            <PlayerFullscreen
              player={playerRef.current}
              setMoveUp={setMoveUp}
            />
          </div>
        </div>
      )}
    </StyledPlayer>
  );
}
