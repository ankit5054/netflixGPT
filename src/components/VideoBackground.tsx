import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import videoFilter from "../utils/videosFilter";
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

  return (
    <div>
      <div className="">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${
            videoResponse[randomItem(videoResponse.length)]?.key
          }?autoplay=1&mute=1&controls=0;`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          autoFocus
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
