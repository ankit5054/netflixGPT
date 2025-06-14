import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import videoFilter from "../utils/videosFilter";

const useVideoBackGround = (setVideoResponse:any, movieId:any) => {
      useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          TMDB_API_OPTIONS
        )
          .then((res) => res.json())
          .then((res) => {
            let filteredRes = videoFilter(res.results, "YouTube", [
              // "Teaser",
              "Trailer",
              // "Clip",
            ]);
    
            filteredRes.length == 0
              ? setVideoResponse(res.results)
              : setVideoResponse(filteredRes);
          });
      }, []);
};

export default useVideoBackGround;
