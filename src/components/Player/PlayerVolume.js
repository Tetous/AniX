import React, { useState } from "react";
import PlayerIcon from "./PlayerIcon";

export default function PlayerVolume({ player }) {
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
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
    <React.Fragment>
      <PlayerIcon
        icon={muted ? "volume-mute" : "volume"}
        size="text-lg"
        onClick={toggleMute}
      />
      <input
        className="w-28 bg-white-neutral bg-opacity-20 appearance-none focus:outline-none mr-8 rounded"
        type="range"
        max="1"
        min="0.1"
        value={volume}
        step="0.05"
        onChange={handleVolume}
        style={{ height: "6px" }}
      />
    </React.Fragment>
  );
}
