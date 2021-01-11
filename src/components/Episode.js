export default function Episode({ getEpisode, idx, selected, episode }) {
  const classes =
    selected === idx
      ? "bg-blue text-white-neutral"
      : "bg-white-800 dark:bg-violet-800";

  return (
    <div
      className={`episode ${classes}`}
      onClick={() => getEpisode(idx, episode)}
    >
      <p>{idx + 1}</p>
    </div>
  );
}
