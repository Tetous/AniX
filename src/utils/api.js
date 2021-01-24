import { fetchWrapper } from "../utils";

const getRomaji = async (title) => {
  let endpoint = process.env.REACT_APP_CF_ENDPOINT;
  endpoint += `/getAnixRomaji?title=${title}`;

  const { success, data } = await fetchWrapper(endpoint);
  return { success, title: data.title };
};

export const searchAnimes = async (searchTerm) => {
  const { title } = await getRomaji(searchTerm.trim());

  let endpoint = process.env.REACT_APP_SCRAPER_ENDPOINT;
  endpoint += `?url=https://4anime.to/?s=${title}`;
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
  let endpoint = process.env.REACT_APP_SCRAPER_ENDPOINT;
  endpoint += `?url=${url}`;
  endpoint += `&spider_name=stream`;

  const { status, items } = await fetchWrapper(endpoint);
  return { status, link: items[0] };
};
