export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN} `,
  },
};

export const TMDB_IMG_CDN = "https://image.tmdb.org/t/p/original/";
export const language = {
  English: {
    search: "Search",
    placeholder: "Search for movies",
  },
  Hindi: {
    search: "खोजें",
    placeholder: "फ़िल्में खोजें",
  },
  French: {
    search: "Recherche",
    placeholder: "Rechercher des films",
  },
  German: {
    search: "Suchen",
    placeholder: "Nach Filmen suchen",
  },
  Spanish: {
    search: "buscar",
    placeholder: "buscar peliculas",
  },
};
