import { useState } from "react";
import Search from "../components/Search";
import Cards from "../components/Cards";
import data from "../data/top_animes.json";

export default function HallOfFame() {
  const [animes, setAnimes] = useState(data);
  const [title, setTitle] = useState("Top Animes");

  return (
    <div className="py-8 layout">
      <Search data={data} setAnimes={setAnimes} setTitle={setTitle} />
      <h2 className="pb-4 text-xl">{title}</h2>
      <Cards animes={animes} />
    </div>
  );
}
