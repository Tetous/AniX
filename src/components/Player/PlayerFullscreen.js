import PlayerIcon from "./PlayerIcon";

export default function PlayerFullscreen({ player, setMoveUp }) {
  const toggleFullscreen = () => {
    const playerContainer = player.parentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      setMoveUp(false);
    } else {
      playerContainer.requestFullscreen();
      setMoveUp(true);
    }
  };

  return <PlayerIcon icon="expand-alt" onClick={toggleFullscreen} />;
}
