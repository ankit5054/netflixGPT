import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoPlayer from "./VideoPlayer";
import MovieLists from "./MovieLists";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div className="w-screen">
      <Header />
      <VideoPlayer />
      <MovieLists />
    </div>
  );
};

export default Browse;
