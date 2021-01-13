import PlayerIcon from "./PlayerIcon";

export default function PlayerVolume({ playing, setPlaying, player }) {
  const togglePlay = () => {
    player.paused ? player.play() : player.pause();
    setPlaying(player.paused === false);
  };

  return <PlayerIcon icon={playing ? "pause" : "play"} onClick={togglePlay} />;
}
