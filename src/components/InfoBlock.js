export default function InfoBlock({ name, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <span className="pb-1">{name}</span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}
