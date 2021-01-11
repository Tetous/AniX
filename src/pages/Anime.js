import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import { formatDesc } from "../utils";
import animes from "../data/top_animes.json";

export default function Anime() {
  const [anime, setAnime] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const anime = animes.find((anime) => anime.slug === slug);
    setAnime(anime);
  }, [slug]);

  return (
    <div>
      <img
        className="h-72 w-full object-cover"
        src={anime?.bannerImage}
        alt="banner"
      />

      <div className="bg-violet-800">
        <div className="w-4/5 m-auto flex h-64">
          <img
            className="w-52 h-80 rounded-lg relative -top-24 mr-8 shadow-lg"
            src={anime?.coverImage.extraLarge}
            alt="cover"
          />
          <div className="p-4 text-xl">
            <h2 classsName="">{anime?.title.english}</h2>
            <div
              className="text-gray-800 text-sm pt-4"
              dangerouslySetInnerHTML={{
                __html: formatDesc(anime?.description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-violet-900 w-4/5 mx-auto">
        <Info anime={anime} />
      </div>
    </div>
  );
}
