import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import randomItem from "../utils/random";

const VideoPlayer = () => {
  const movies = useSelector((store: any) => store.movies?.nowplaying);
  if (!movies) return;

  let { original_title, overview, id } = movies[randomItem(20)];
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default VideoPlayer;
