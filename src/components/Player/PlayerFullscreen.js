import PlayerIcon from "./PlayerIcon";

export default function PlayerFullscreen({ player, setMoveUp }) {
  const toggleFullscreen = (e) => {
    e.stopPropagation();

    const playerContainer = player.parentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      window.screen.orientation?.unlock();
      setMoveUp(false);
    } else {
      playerContainer.requestFullscreen();
      window.screen.orientation.lock("landscape-primary");
      setMoveUp(true);
    }
  };

  return <PlayerIcon icon="expand-alt" onClick={toggleFullscreen} />;
}
