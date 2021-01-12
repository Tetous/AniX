import { useEffect, useRef, useState } from "react";

export default function Player({ src, poster }) {
  const [playing, setPlaying] = useState(false);
  const [remaining, setRemaining] = useState(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const playerRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const toggleMute = () => {
    const player = playerRef.current;
    if (muted) {
      player.muted = false;
      setMuted(false);
    } else {
      player.muted = true;
      setMuted(true);
    }
  };

  const handleVolume = (e) => {
    const player = playerRef.current;
    const volume = e.target.value;
    player.volume = volume;
    setVolume(volume);
  };

  const togglePlay = () => {
    const player = playerRef.current;
    if (player.paused) {
      player.play();
      setPlaying(true);
    } else {
      player.pause();
      setPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    const playerContainer = playerRef.current.parentElement;
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const scrub = (e) => {
    const player = playerRef.current;
    const progress = progressRef.current;
    const scrubTime =
      (e.nativeEvent.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
  };

  const handleProgress = () => {
    const player = playerRef.current;
    const progressBar = progressBarRef.current;
    const percent = (player.currentTime / player.duration) * 100;
    progressBar.style.width = `${percent}%`;
  };

  const updateRemaining = () => {
    const player = playerRef.current;
    const remaining = (player.currentTime - player.duration) / 60;
    setRemaining(remaining.toFixed(2));
  };

  useEffect(() => {
    const player = playerRef.current;
    player.addEventListener("timeupdate", () => {
      handleProgress();
      updateRemaining();
    });
  }, []);

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
    <div className="rounded h-96 bg-white-skeleton dark:bg-violet-skeleton rounded shadow relative">
      <video
        ref={playerRef}
        className="h-full w-full object-cover rounded"
        src={src}
        poster={poster}
      />

      <div className="opacity-0 hover:opacity-100 bg-violet-skeleton bg-opacity-90 shadow-none w-full absolute bottom-0 left-0 py-2 flex items-center">
        <i
          className={`fas fa-${
            playing ? `pause` : "play"
          } text-sm text-white-neutral mx-4 cursor-pointer`}
          onClick={togglePlay}
        />

        <div
          ref={progressRef}
          className="w-1/2 bg-white-neutral rounded bg-opacity-20 cursor-pointer"
          onClick={scrub}
          style={{ height: "6px" }}
        >
          <div
            ref={progressBarRef}
            className="progress-filled w-0 bg-green-500 rounded"
            style={{ height: "6px" }}
          />
        </div>
        {remaining && (
          <span className="relative top-1px ml-2 text-sm w-2">{remaining}</span>
        )}

        <i
          className={`ml-auto text-lg text-white-neutral mx-2 cursor-pointer fas ${
            muted ? "fa-volume-mute" : "fa-volume"
          }`}
          onClick={toggleMute}
        />
        <input
          type="range"
          max="1"
          min="0.1"
          value={volume}
          step="0.05"
          onChange={handleVolume}
          className="w-32 bg-white-neutral bg-opacity-20 rounded focus:outline-none"
          style={{ height: "6px" }}
        />

        <i
          className="mr-4 ml-auto fas fa-expand-alt text-sm text-base text-white-neutral cursor-pointer"
          onClick={toggleFullscreen}
        />
      </div>
    </div>
  );
}
