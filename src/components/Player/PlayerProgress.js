import React, { useState, useRef, useEffect } from "react";

export default function PlayerProgress({ player }) {
  const [remaining, setRemaining] = useState(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const scrub = (e) => {
    e.stopPropagation();
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
      setRemaining(Number(remaining.toFixed(2)));
    };

    player?.addEventListener("timeupdate", updateRemaining);
  }, [player]);

  return (
    <React.Fragment>
      <div className="progress-bar pointer" ref={progressRef} onClick={scrub}>
        <div className="progress-filled" ref={progressBarRef} />
      </div>
      {!Number.isNaN(remaining) && <span className="text-sm">{remaining}</span>}
    </React.Fragment>
  );
}
