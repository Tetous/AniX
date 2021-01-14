import { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import Poster from "../styles/Poster";

export default function Card({ anime, idx }) {
  const [tooltip, setTooltip] = useState(false);

  return (
    <Link
      className="relative"
      to={{
        pathname: `/${anime.slug}`,
        anime,
      }}
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Poster src={anime.coverImage.extraLarge} alt="poster" />

      <p className="text-sm text-light">
        {anime.title.english ? anime.title.english : anime.title.romaji}
      </p>

      {tooltip && <Tooltip anime={anime} flip={idx % 5 === 0} />}
    </Link>
  );
}
