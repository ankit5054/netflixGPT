import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import randomItem from "../utils/random";

const VideoPlayer = () => {
  const movies = useSelector((store: any) => store.movies?.nowplaying);
  if (!movies) return;

  let { original_title, overview, id } = movies[randomItem(20)];
  // console.log(original_title,id);
  
  return (
    <div className="pt-2 md:pt-0">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default VideoPlayer;
