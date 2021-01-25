import React, { useState } from "react";
import PlayerIcon from "./PlayerIcon";

export default function PlayerVolume({ player }) {
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  const toggleMute = (e) => {
    e.stopPropagation();

    if (muted) {
      player.muted = false;
      setMuted(false);
    } else {
      player.muted = true;
      setMuted(true);
    }
  };

  const handleVolume = (e) => {
    const volume = e.target.value;
    player.volume = volume;
    setVolume(volume);
  };

  return (
    <div className="volume flex-center">
      <PlayerIcon
        icon={muted ? "volume-mute" : "volume"}
        onClick={toggleMute}
      />
      <input
        type="range"
        max="1"
        min="0.1"
        value={volume}
        step="0.05"
        onChange={handleVolume}
      />
    </div>
  );
}
