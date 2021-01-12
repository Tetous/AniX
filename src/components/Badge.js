export default function Badge({ text }) {
  return (
    <span className="font-bold rounded-full mr-4 bg-blue-900 text-white px-4 py-2 bg-pink">
      {text}
    </span>
  );
}
