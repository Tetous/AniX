export default function InfoBlock({ name, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <span className="pb-1">{name}</span>
      <span className="text-sm text-black-700 dark:text-gray-700">{value}</span>
    </div>
  );
}
