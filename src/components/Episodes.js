import { useState } from "react";
import Episode from "./Episode";
import { getStream } from "../utils/api";

export default function Episodes({ setSrc, episodes }) {
  const [selected, setSelected] = useState(null);

  const getEpisode = async (idx, episode) => {
    setSelected(idx);

    const { success, link } = await getStream(episode);

    if (success) {
      setSrc(link);
    }
  };

  return (
    <div className="episodes">
      {episodes?.slice(0, 24).map((episode, idx) => (
        <Episode
          key={episode}
          episode={episode}
          idx={idx}
          getEpisode={getEpisode}
          selected={selected}
        />
      ))}
    </div>
  );
}
