import Card from "./Card";

export default function Cards({ animes }) {
  return (
    <div className="grid grid-cols-5 gap-8">
      {animes.slice(0, 10).map((anime, idx) => (
        <Card key={anime.id} anime={anime} idx={idx + 1} />
      ))}
    </div>
  );
}
