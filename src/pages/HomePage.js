import { useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Layout from "../styles/Layout";
import data from "../data/top_animes.json";

export default function HomePage() {
  const [animes, setAnimes] = useState(data);
  const [title, setTitle] = useState("Top Animes");

  return (
    <Layout>
      <Search setTitle={setTitle} setAnimes={setAnimes} />
      <h2>{title}</h2>
      <Cards animes={animes} />
    </Layout>
  );
}
