import CardSkeleton from "../components/CardSkeleton";
import GridSkeleton from "../components/GridSkeleton";

export default function LoadSkeleton() {
  return (
    <div className="mt-8">
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
    </div>
  );
}
