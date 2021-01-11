import { useState } from "react";
import Episode from "./Episode";
import { fetchWrapper } from "../utils";

export default function Episodes({ setSrc, episodes }) {
  const [selected, setSelected] = useState(null);

  const getEpisode = async (idx, episode) => {
    setSelected(idx);

    let endpoint = process.env.REACT_APP_CF_STREAM;
    const { success, data } = await fetchWrapper(`${endpoint}?url=${episode}`);

    if (success) {
      setSrc(data.link);
    }
  };

  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {episodes?.slice(0, 24).map((episode, idx) => (
        <Episode
          episode={episode}
          idx={idx}
          getEpisode={getEpisode}
          selected={selected}
        />
      ))}
    </div>
  );
}
