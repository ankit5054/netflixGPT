import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/slice/movies";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatchAction = useDispatch();
  const getMovies = (url: string) => {
    fetch(url, TMDB_API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatchAction(addUpcomingMovies(json.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
    );
  }, []);
};

export default useUpcomingMovies;
