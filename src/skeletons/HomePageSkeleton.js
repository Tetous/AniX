import Skeleton from "../styles/Skeleton";
import StyledCards from "../styles/Cards";
import PosterSkeleton from "../styles/PosterSkeleton";

export default function HomePageSkeleton() {
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <div style={{ marginTop: "1rem" }}>
      <Skeleton width="270px" height="30px" marginBottom="1.5rem" />
      <StyledCards>
        {skeletons.map((skeleton) => (
          <PosterSkeleton key={skeleton} />
        ))}
      </StyledCards>
    </div>
  );
}
