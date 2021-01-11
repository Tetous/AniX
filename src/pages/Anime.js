import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import Player from "../components/Player";
import Episodes from "../components/Episodes";
import { formatDesc } from "../utils";
import animes from "../data/top_animes.json";

export default function Anime() {
  const [anime, setAnime] = useState(null);
  const [src, setSrc] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const anime = animes.find((anime) => anime.slug === slug);
    setAnime(anime);
  }, [slug]);

  return (
    <div>
      <img
        className="object-cover w-full h-72"
        src={anime?.bannerImage}
        alt="banner"
      />

      <div className="bg-white-800 dark:bg-violet-800">
        <div className="flex w-4/5 h-64 m-auto">
          <img
            className="relative mr-8 rounded-lg shadow-lg w-52 h-80 -top-24"
            src={anime?.coverImage.extraLarge}
            alt="cover"
          />
          <div className="p-4 text-xl">
            <h2 className="">{anime?.title.english}</h2>
            <div
              className="pt-4 text-sm text-black-800 dark:text-gray-800"
              dangerouslySetInnerHTML={{
                __html: formatDesc(anime?.description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 mb-8 w-4/5 mx-auto grid grid-cols-4">
        <Info anime={anime} />

        <div className="col-span-3">
          <Player src={src} poster={anime?.bannerImage} />
          <Episodes episodes={anime?.episode_links} setSrc={setSrc} />
        </div>
      </div>
    </div>
  );
}
