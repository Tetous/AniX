import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Info from "../components/Info";
import Player from "../components/Player";
import Episodes from "../components/Episodes";
import { formatDesc } from "../utils";
import { getAnime } from "../utils/api";
import StyledAnimePage from "../styles/AnimePage";
import AnimePageSkeleton from "../skeletons/AnimePageSkeleton";

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
    <StyledAnimePage>
      <img className="banner" src={anime?.bannerImage} alt="banner" />

      <div className="banner-shell">
        <div className="banner-content flex-center">
          <img src={anime?.coverImage.extraLarge} alt="cover" />
          <div className="banner-info text-sm">
            <h2 style={{ marginBottom: "0.8rem" }}>{anime?.title.english}</h2>
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
          <Episodes episodes={anime?.episode_links} setSrc={setSrc} />
        </div>
      </div>
    </StyledAnimePage>
  );
}
