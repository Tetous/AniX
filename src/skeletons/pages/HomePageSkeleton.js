import TitleSkeleton from "../components/TitleSkeleton";
import CardSkeleton from "../components/CardSkeleton";
import GridSkeleton from "../components/GridSkeleton";

export default function HomePageSkeleton() {
  return (
    <>
      <TitleSkeleton />
      <GridSkeleton>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </GridSkeleton>
    </>
  );
}
