export default function Badge({ text, color }) {
  return (
    <span
      className="font-bold rounded-full mr-4 bg-blue-900 text-white px-4 py-2"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}
