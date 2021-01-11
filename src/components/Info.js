import InfoBlock from "./InfoBlock";
import { formatDate } from "../utils";

export default function Info({ anime }) {
  return (
    <div className="bg-white-800 dark:bg-violet-800 h-108 w-48 rounded p-4 space-y-4 mb-1">
      <InfoBlock name="Status" value={anime?.status} />
      <InfoBlock name="Episodes" value={anime?.episodes} />
      <InfoBlock name="Duration" value={anime?.duration} />
      <InfoBlock
        name="Season"
        value={anime?.season + " " + anime?.seasonYear}
      />
      <InfoBlock name="Average Score" value={anime?.averageScore + "%"} />
      <InfoBlock name="Genres" value={anime?.genres.slice(0, 3).join(", ")} />
      <InfoBlock name="Start Date" value={formatDate(anime?.startDate)} />
      <InfoBlock name="End Date" value={formatDate(anime?.endDate)} />
    </div>
  );
}
