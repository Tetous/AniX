import Card from "./Card";
import animes from "../data/top_animes.json";

export default function Cards() {
  return (
    <div className="grid grid-cols-5 gap-8">
      {animes.slice(0, 10).map((anime, idx) => (
        <Card key={anime.id} anime={anime} idx={idx + 1} />
      ))}
    </div>
  );
}
