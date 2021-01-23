import Skeleton from "../styles/Skeleton";
import StyledAnimePage from "../styles/AnimePage";

export default function AnimePageSkeleton() {
  return (
    <StyledAnimePage>
      <div className="banner-skl" />

      <div className="banner-shell transparent">
        <div className="banner-content flex-center">
          <Skeleton className="poster" />
          <div className="banner-info banner-info-skl" style={{ width: "80%" }}>
            <Skeleton width="300px" height="30px" marginBottom="1.5rem" />
            <Skeleton width="auto" height="100px" />
          </div>
        </div>
      </div>
    </StyledAnimePage>
  );
}
