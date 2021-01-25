import React, { useState } from "react";
import Cards from "../components/Cards";
import SearchWrapper from "../components/SearchWrapper";
import HomePageSkeleton from "../skeletons/HomePageSkeleton";
import useLoading from "../hooks/useLoading";
import Layout from "../styles/Layout";
import data from "../data/top_animes.json";

export default function HomePage() {
  const [animes, setAnimes] = useState(data);
  const [title, setTitle] = useState("Top Animes");
  const [isLoading, load] = useLoading();

  return (
    <Layout>
      <SearchWrapper setTitle={setTitle} setAnimes={setAnimes} load={load} />

      {isLoading && <HomePageSkeleton />}

      {!isLoading && (
        <React.Fragment>
          <h2 style={{ marginTop: "1rem" }}>{title}</h2>
          <Cards animes={animes} />
        </React.Fragment>
      )}
    </Layout>
  );
}
