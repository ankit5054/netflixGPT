import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoPlayer from "./VideoPlayer";
import MovieLists from "./MovieLists";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="w-screen">
      <Header />
      <VideoPlayer />
      <MovieLists />
    </div>
  );
};

export default Browse;
