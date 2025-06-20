import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addMovies } from "../store/slice/movies";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const isPresent = useSelector((store: any) => store.movies.nowplaying);
  const dispatchAction = useDispatch();
  const getNowPlayingMovies = (url: string) => {
    fetch(url, TMDB_API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatchAction(addMovies(json.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!isPresent)
      getNowPlayingMovies(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      );
  }, []);
};

export default useNowPlayingMovies;
