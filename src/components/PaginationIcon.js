export default function PaginateIcon({ icon, disable, onClick }) {
  return (
    <i
      className={`fal fa-${icon} pointer ${disable && "disabled"}`}
      onClick={onClick}
    />
  );
}
