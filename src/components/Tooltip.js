import Badge from "./Badge";
import { titleCase } from "../utils";

export default function Tooltip({ flip, anime }) {
  return (
    <div className={`tooltip ${flip ? "right-44" : "left-44"}`}>
      <div className="flex items-center text-base mb-4">
        <h2>
          {titleCase(anime.season)} {anime.seasonYear}
        </h2>

        <div className="ml-auto">
          <i className="fal fa-smile pr-2"></i>
          <span className="font-medium">{anime.averageScore}%</span>
        </div>
      </div>

      <div className="space-x-1 mb-6">
        <span>{anime.format}</span> <span>&bull;</span>{" "}
        <span>{anime.episodes} Episodes</span>
      </div>

      <div>
        {anime.genres.slice(0, 2).map((genre) => (
          <Badge key={genre} text={genre} />
        ))}
      </div>
    </div>
  );
}
