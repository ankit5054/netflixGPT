import { useRef } from "react";
import { TMDB_IMG_CDN } from "../utils/constants";
import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react";
export default function MovieList({ title, movies }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });
    }
  };

  if (!movies) return;

  return (
    <div className="w-screen px-5 relative">
      {/* Title Row with Arrows */}
      <div className="flex items-center justify-between">
        <h1 className="items-center align-middle flex space-x-2 md:text-2xl sm:text-xl text-xl py-1">
          <span>{title}</span>
          <span>
            <ChevronRightIcon />
          </span>
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-1 bg-gray-700 rounded-full hidden sm:hidden md:flex hover:cursor-pointer hover:bg-gray-500"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-1 bg-gray-700 rounded-full hidden sm:hidden md:flex hover:cursor-pointer  hover:bg-gray-500"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable Movie List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll w-screen scroll-smooth no-scrollbar"
      >
        {movies.map((i: any) => (
          <img
            key={i.id}
            className="p-2 rounded-2xl lg:w-1/7 md:w-1/5 sm:w-1/3 w-1/3 hover:scale-105 duration-300 hover:cursor-pointer"
            src={TMDB_IMG_CDN + i.poster_path}
            alt="movieTitle"
          />
        ))}
      </div>
    </div>
  );
}
