
interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black from-0% to-30% absolute pt-[20%] px-10 text-white">
      <div className="text-3xl font-bold ">{title}</div>
      <div className="text-md w-1/3 font-semibold">{overview}</div>
      <div className="space-x-2 my-5">
        <button className="hover:cursor-pointer hover:opacity-70 duration-200 rounded-md text-lg px-9 py-2 text-black bg-white font-bold">
          Play
        </button>
        <button className="hover:cursor-pointer rounded-md text-lg px-6 py-2 bg-gray-600 text-white font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
