import { fetchWrapper } from "../utils";

export const searchAnimes = async (searchTerm) => {
  let endpoint = process.env.REACT_APP_SCRAPER_ENDPOINT;
  endpoint += `?url=https://4anime.to/?s=${searchTerm.trim()}`;
  endpoint += `&spider_name=search_animes`;

  const { status, items } = await fetchWrapper(endpoint);
  return { status, animes: items };
};

export const getAnime = async (slug) => {
  let endpoint = process.env.REACT_APP_SCRAPER_ENDPOINT;
  endpoint += `?url=https://4anime.to/anime/${slug}`;
  endpoint += `&spider_name=anime`;

  const { status, items } = await fetchWrapper(endpoint);
  return { status, anime: items[0] };
};

export const getStream = async (url) => {
  let endpoint = process.env.REACT_APP_CF_STREAM;
  endpoint += `?url=${url}`;

  const { success, data } = await fetchWrapper(`${endpoint}?url=${url}`);
  return { success, link: data.link };
};
