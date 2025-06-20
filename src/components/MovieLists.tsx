import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieLists = () => {
  const movies = useSelector((store: any) => store?.movies);

  return (
    <div className="bg-black w-screen  text-white lg:-mt-56 md:-mt-30 -mt-10  ">
      <MovieList title={"Now Playing"} movies={movies?.nowplaying} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRated} />
      <MovieList title={"Upcoming"} movies={movies?.upcoming} />
    </div>
  );
};

export default MovieLists;
