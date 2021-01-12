import { useState } from "react";
import Search from "../components/Search";
import Cards from "../components/Cards";
import HomePageSkeleton from "../skeletons/pages/HomePageSkeleton";
import data from "../data/top_animes.json";

export default function HomePage() {
  const [animes, setAnimes] = useState(data);
  const [title, setTitle] = useState("Top Animes");
  const [loading, setLoading] = useState(false);

  return (
    <div className="py-8 layout">
      <Search
        data={data}
        setAnimes={setAnimes}
        setTitle={setTitle}
        setLoading={setLoading}
      />

      {loading && <HomePageSkeleton />}

      {!loading && (
        <>
          <h2 className="pb-4 text-xl">{title}</h2>
          <Cards animes={animes} />
        </>
      )}
    </div>
  );
}
