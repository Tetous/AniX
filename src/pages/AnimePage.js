import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Info from "../components/Info";
import Player from "../components/Player";
import Episodes from "../components/Episodes";
import AnimePageSkeleton from "../skeletons/pages/AnimePageSkeleton";
import { formatDesc } from "../utils";
import { getAnime } from "../utils/api";

export default function AnimePage() {
  const [anime, setAnime] = useState(null);
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location?.anime?.id) {
      setAnime(location.anime);
      setLoading(false);
    } else {
      getAnime(slug).then(({ anime }) => {
        setAnime(anime);
        setLoading(false);
      });
    }
  }, [slug, location.anime]);

  if (loading) return <AnimePageSkeleton />;

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
