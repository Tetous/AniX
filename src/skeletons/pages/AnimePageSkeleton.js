import TitleSkeleton from "../components/TitleSkeleton";
import DescriptionSkeleton from "../components/DescriptionSkeleton";

export default function AnimePageSkeleton() {
  return (
    <div>
      <div className="h-72" />
      <div>
        <div className="flex w-4/5 h-64 m-auto">
          <div className="skeleton-base relative mr-8 rounded-lg shadow-lg w-72 h-80 -top-24" />
          <div className="p-4 w-full">
            <TitleSkeleton />
            <DescriptionSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
