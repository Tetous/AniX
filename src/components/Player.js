import { useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls";

export default function Player({ src, poster }) {
  const playerRef = useRef(null);
  const [controls, setControls] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [resume, setResume] = useState(0);

  const togglePlay = () => {
    const player = playerRef.current;

    if (player.paused) {
      setPlaying(true);
      player.currentTime = resume;
      player.play();
    } else {
      setPlaying(false);
      setResume(player.currentTime);
      player.load();
    }
  };

  const forward = () => (playerRef.current.currentTime += 30);
  const backward = () => (playerRef.current.currentTime -= 30);

  const showControls = () => {
    if (src) {
      setControls(true);
    }
  };

  useEffect(() => {
    const player = playerRef.current;

    if (src) {
      player.pause();
      setPlaying(false);
      setControls(true);
      setResume(0);
      player.setAttribute("src", src);
      player.load();
    }
  }, [src]);

  useEffect(() => {
    const player = playerRef.current;

    player.addEventListener("timeupdate", () => {
      const progressFilled = document.querySelector(".progress-filled");
      if (progressFilled) {
        const percent = (player.currentTime / player.duration) * 100;
        progressFilled.style.width = `${percent}%`;
      }
    });
  }, []);

  return (
    <div
      className="h-96 relative"
      onMouseOver={showControls}
      onMouseLeave={() => setControls(false)}
    >
      <video
        ref={playerRef}
        className="w-full h-full object-cover rounded shadow-lg"
        poster={poster}
      ></video>

      <PlayerControls
        forward={forward}
        backward={backward}
        playing={playing}
        togglePlay={togglePlay}
        playerRef={playerRef}
        show={controls}
      />
    </div>
  );
}
