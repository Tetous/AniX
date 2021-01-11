import { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

export default function Card({ anime, idx }) {
  const [tooltip, setTooltip] = useState(false);

  return (
    <Link
      to={`/${anime.slug}`}
      className="relative cursor-pointer"
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <img
        className="w-48 h-64 rounded shadow"
        src={anime.coverImage.extraLarge}
        alt="poster"
      />
      <p className="pt-3 text-xs font-bold tracking-wide text-gray-700">
        {anime.title.english}
      </p>
      {tooltip && <Tooltip anime={anime} flip={idx % 5 === 0} />}
    </Link>
  );
}
