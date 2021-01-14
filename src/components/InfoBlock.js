export default function InfoBlock({ name, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex-col space-x">
      <span>{name}</span>
      <span className="text-sm text-light">{value}</span>
    </div>
  );
}
