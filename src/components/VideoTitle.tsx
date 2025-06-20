import { Play, InfoIcon } from "lucide-react";

interface VideoTitleProps {
  title: string;
  overview: string;
  movieId: number;
}

const VideoTitle = ({ title, overview, movieId }: VideoTitleProps) => {
  // console.log("title", movieId, title);

  return (
    <div className="w-full aspect-video bg-gradient-to-r from-black from-0% to-30% absolute pt-[20%]  md:pt-[28%] lg:pt-[20%]  px-5 md:px-10 text-white">
      <div className="md:text-3xl font-bold ">{title}</div>
      <div className="hidden xl:flex text-sm xl:w-1/3 mt-2">{overview}</div>
      <div className="flex space-x-2 my-3">
        <button className="flex md:hidden space-x-2 hover:cursor-pointer  hover:opacity-70 duration-200 rounded-md text-xs align-middle px-3 py-1 md:text-lg md:px-5 md:py-2 text-black bg-white font-bold">
          <Play size={15}/>
          <span className="">Play</span>
        </button>
        <button className="hidden md:flex space-x-2 hover:cursor-pointer  hover:opacity-70 duration-200 rounded-md text-xs align-middle px-3 py-1 md:text-lg md:px-5 md:py-2 text-black bg-white font-bold">
          <Play />
          <span className="">Play</span>
        </button>
        <button className="hidden lg:flex space-x-2 hover:cursor-pointer rounded-md text-lg sm:px-6 py-2 px-3  bg-gray-600 text-white font-bold">
          <InfoIcon /> <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
