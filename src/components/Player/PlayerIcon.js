export default function PlayerIcon({ onClick, icon, size = "text-sm" }) {
  return (
    <i
      className={`fas fa-${icon} text-white-neutral cursor-pointer mr-4 ${size}`}
      onClick={onClick}
    />
  );
}
