import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoPlayer from "./VideoPlayer";
import MovieLists from "./MovieLists";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isgptSearchShow = useSelector((store: any) => store.feature.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div className="">
      <Header />
      {isgptSearchShow ? (
        <GptSearch />
      ) : (
        <>
          <VideoPlayer />
          <MovieLists />
        </>
      )}
    </div>
  );
};

export default Browse;
