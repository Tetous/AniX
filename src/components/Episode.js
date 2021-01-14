export default function Episode({ getEpisode, idx, selected, episode }) {
  return (
    <div
      className={`episode pointer text-sm ${selected === idx && "selected"}`}
      onClick={() => getEpisode(idx, episode)}
    >
      <p>{idx + 1}</p>
    </div>
  );
}
