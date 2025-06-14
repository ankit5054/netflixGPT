import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoPlayer from "./VideoPlayer";
import MovieList from "./MovieList";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <VideoPlayer />
      <MovieList />
    </div>
  );
};

export default Browse;
