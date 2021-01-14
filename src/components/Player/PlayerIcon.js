export default function PlayerIcon({ onClick, icon }) {
  return <i className={`fas fa-${icon} pointer`} onClick={onClick} />;
}
