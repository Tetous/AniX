import React, { useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Layout from "../styles/Layout";
import HomePageSkeleton from "../skeletons/HomePageSkeleton";
import data from "../data/top_animes.json";

export default function HomePage() {
  const [animes, setAnimes] = useState(data);
  const [title, setTitle] = useState("Top Animes");
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Search
        setTitle={setTitle}
        setAnimes={setAnimes}
        setLoading={setLoading}
      />

      {loading && <HomePageSkeleton />}

      {!loading && (
        <React.Fragment>
          <h2>{title}</h2>
          <Cards animes={animes} />
        </React.Fragment>
      )}
    </Layout>
  );
}
