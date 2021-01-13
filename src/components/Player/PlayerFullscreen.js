import PlayerIcon from "./PlayerIcon";

export default function PlayerFullscreen({ player }) {
  const toggleFullscreen = () => {
    const playerContainer = player.parentElement;
    document.fullscreenElement
      ? document.exitFullscreen()
      : playerContainer.requestFullscreen();
  };

  return <PlayerIcon icon="expand-alt" onClick={toggleFullscreen} />;
}
