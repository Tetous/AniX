import InfoBlock from "./InfoBlock";
import { formatDate } from "../utils";

export default function Info({ anime }) {
  return (
    <div className="info">
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
