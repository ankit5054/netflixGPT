import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieLists = () => {
  const movies = useSelector((store: any) => store?.movies?.nowplaying);
  
  return (
    <div className="bg-black w-screen  text-white lg:-mt-64 md:-mt-24 sm:-mt-5 bg-gradient-to-t from-black">
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
    </div>
  );

};

export default MovieLists;
