import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addMovies, addPopularMovies } from "../store/slice/movies";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatchAction = useDispatch();
  const isPresent = useSelector((store: any) => store.movies.popularMovies);
  const getMovies = (url: string) => {
    fetch(url, TMDB_API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatchAction(addPopularMovies(json.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!isPresent)
      getMovies(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      );
  }, []);
};

export default usePopularMovies;
