import { useState } from "react";
import randomItem from "../utils/random";
import useVideoBackGround from "../hooks/useVideoBackGround";

interface VideoBackGroundProps {
  movieId: number;
}
interface VideoResult {
  site?: string;
  key?: string;
}

const VideoBackground = ({ movieId }: VideoBackGroundProps) => {
  const [videoResponse, setVideoResponse] = useState<VideoResult[]>([]);
  useVideoBackGround(setVideoResponse, movieId);
  // console.log("videoResponse", movieId, videoResponse);

  return (
    <div>
      <div className="">
        <iframe
          className="w-screen  aspect-video"
          src={`https://www.youtube.com/embed/${
            videoResponse[randomItem(videoResponse.length)]?.key
          }?autoplay=1&mute=1&controls=0;`}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          autoFocus
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
