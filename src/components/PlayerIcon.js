export default function PlayerIcon({ icon, onClick }) {
  return (
    <i
      className={`fal fa-${icon} cursor-pointer text-white-neutral`}
      onClick={onClick}
    ></i>
  );
}
