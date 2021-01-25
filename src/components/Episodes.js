import { useState } from "react";
import Episode from "./Episode";
import { getStream } from "../utils/api";

export default function Episodes({ setSrc, episodes, start, end }) {
  const [selected, setSelected] = useState(null);

  const getEpisode = async (idx, episode) => {
    setSelected(idx);

    const { status, link } = await getStream(episode);

    if (status === "ok") {
      setSrc(link?.link);
    }
  };

  return (
    <div className="episodes">
      {episodes?.slice(start, end).map((episode, idx) => (
        <Episode
          key={episode}
          episode={episode}
          idx={start + idx}
          getEpisode={getEpisode}
          selected={selected}
        />
      ))}
    </div>
  );
}
