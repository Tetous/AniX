import React, { useState, useRef, useEffect } from "react";

export default function PlayerProgress({ player }) {
  const [remaining, setRemaining] = useState(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const scrub = (e) => {
    const progress = progressRef.current;
    const scrubTime =
      (e.nativeEvent.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
  };

  useEffect(() => {
    const handleProgress = () => {
      const progressBar = progressBarRef.current;
      const percent = (player.currentTime / player.duration) * 100;

      if (progressBar) {
        progressBar.style.width = `${percent}%`;
      }
    };

    player?.addEventListener("timeupdate", handleProgress);
  }, [player]);

  useEffect(() => {
    const updateRemaining = () => {
      const remaining = (player?.currentTime - player?.duration) / 60;
      setRemaining(remaining.toFixed(2));
    };

    player?.addEventListener("timeupdate", updateRemaining);
  }, [player]);

  return (
    <React.Fragment>
      <div
        ref={progressRef}
        className="w-1/2 bg-white-neutral rounded bg-opacity-20 cursor-pointer mr-2"
        onClick={scrub}
        style={{ height: "6px" }}
      >
        <div
          ref={progressBarRef}
          className="progress-filled w-0 bg-green-500 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <span className="text-sm w-2">{remaining}</span>
    </React.Fragment>
  );
}
