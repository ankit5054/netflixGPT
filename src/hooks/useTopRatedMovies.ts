import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/slice/movies";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatchAction = useDispatch();
  const isPresent = useSelector((store: any) => store.movies.upcoming);
  const getMovies = (url: string) => {
    fetch(url, TMDB_API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatchAction(addTopRatedMovies(json.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!isPresent)
      getMovies(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
      );
  }, []);
};

export default useTopRatedMovies;
