export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN} `,
  },
};

export const TMDB_IMG_CDN="https://image.tmdb.org/t/p/original/"