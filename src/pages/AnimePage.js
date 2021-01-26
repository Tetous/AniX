import { useEffect, useState } from "react";
import { Redirect, useParams, useLocation } from "react-router-dom";
import Info from "../components/Info";
import Player from "../components/Player";
import Episodes from "../components/Episodes";
import Pagination from "../components/Pagination";
import StyledAnimePage from "../styles/AnimePage";
import useLoading from "../hooks/useLoading";
import AnimePageSkeleton from "../skeletons/AnimePageSkeleton";
import { formatDesc } from "../utils";
import { getAnime } from "../utils/api";

export default function AnimePage() {
  const { slug } = useParams();
  const location = useLocation();
  const [isLoading, load] = useLoading();

  const [anime, setAnime] = useState(null);
  const [src, setSrc] = useState(null);

  const [pagination, setPagination] = useState({
    start: 0,
    end: 12,
  });
  const { start, end } = pagination;

  useEffect(() => {
    if (location?.anime?.id) {
      setAnime(location.anime);
    } else {
      load(
        getAnime(slug).then(({ anime }) => {
          setAnime(anime);
        })
      );
    }
  }, [slug, location.anime]);

  if (isLoading) return <AnimePageSkeleton />;

  if (!isLoading && anime === undefined) return <Redirect to="/" />;

  return (
    <StyledAnimePage>
      <img className="banner" src={anime?.bannerImage} alt="banner" />

      <div className="banner-shell">
        <div className="banner-content flex-center">
          <img src={anime?.coverImage.extraLarge} alt="cover" />

          <div className="banner-info text-sm">
            <h2>{anime?.title.english}</h2>
            <div
              className="text-light"
              dangerouslySetInnerHTML={{
                __html: formatDesc(anime?.description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="center">
        <Info anime={anime} />

        <div className="player-episodes">
          <Player src={src} poster={anime?.bannerImage} />
          <Episodes
            episodes={anime?.episode_links}
            setSrc={setSrc}
            start={start}
            end={end}
          />
          {anime?.episode_links.length > 12 && (
            <Pagination
              start={start}
              end={end}
              setPagination={setPagination}
              episodes={anime?.episode_links.length}
            />
          )}
        </div>
      </div>
    </StyledAnimePage>
  );
}
