import Badge from "./Badge";
import { titleCase } from "../utils";
import StyledTooltip from "../styles/Tooltip";

export default function Tooltip({ flip, anime }) {
  return (
    <StyledTooltip flip={flip}>
      <div className="flex-between">
        <p>
          {titleCase(anime.season)} {anime.seasonYear}
        </p>
        <span>{anime.averageScore}%</span>
      </div>

      <div className="format-episodes text-sm">
        <span>{anime.format}</span> <span>&bull;</span>{" "}
        <span>{anime.episodes} Episodes</span>
      </div>

      <div className="flex-center text-xs">
        {anime.genres.slice(0, 2).map((genre) => (
          <Badge key={genre} text={genre} />
        ))}
      </div>
    </StyledTooltip>
  );
}
