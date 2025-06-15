import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieLists = () => {
  const movies = useSelector((store: any) => store?.movies);

  return (
    <div className="bg-black w-screen  text-white lg:-mt-64 md:-mt-24 sm:-mt-5 bg-gradient-to-t from-black to-transparent">
      <MovieList title={"Now Playing"} movies={movies?.nowplaying} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRated} />
      <MovieList title={"Upcoming"} movies={movies?.upcoming} />
      {/* <MovieList title={"Horror"} movies={movies}/>
      <MovieList title={"Sci-Fi"} movies={movies}/>
      <MovieList title={"Cartoon"} movies={movies}/>
      <MovieList title={"Anime"} movies={movies}/> */}
    </div>
  );
};

export default MovieLists;
