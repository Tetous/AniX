import { useState } from "react";
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
    <div className="mt-8 grid grid-cols-10 gap-6">
      {episodes?.slice(0, 10).map((episode, idx) => (
        <div
          key={episode}
          className={`episode ${
            selected === idx
              ? `bg-blue text-white-neutral`
              : `bg-white-800 dark:bg-violet-800`
          }`}
          onClick={() => getEpisode(idx, episode)}
        >
          <p>{idx + 1}</p>
        </div>
      ))}
    </div>
  );
}
