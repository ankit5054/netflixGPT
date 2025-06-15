import { Play,InfoIcon } from "lucide-react";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-full aspect-video bg-gradient-to-r from-black from-0% to-30% absolute pt-[30%] sm:pt-[25%] md:pt-[28%] lg:pt-[20%] px-10 text-white">
      <div className="md:text-3xl sm:text-xl text-xl font-bold ">{title}</div>
      <div className="flex space-x-2 my-5">
        <button className="flex space-x-2 hover:cursor-pointer  hover:opacity-70 duration-200 rounded-md sm:text-lg   px-5 sm:px-5  py-2 text-black bg-white font-bold">
          <Play /><span>
             Play
            </span>
        </button>
        <button className="flex space-x-2 hover:cursor-pointer rounded-md text-lg sm:px-6 py-2 px-3  bg-gray-600 text-white font-bold">
        <InfoIcon/> <span>
           More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
