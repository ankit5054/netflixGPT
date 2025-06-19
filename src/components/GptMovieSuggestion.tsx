import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const aiRecommendedMovies = useSelector(
    (store: any) => store.movies.aiRecommended
  );
  if (!aiRecommendedMovies) return <></>;
  console.log(aiRecommendedMovies);

  const { movieNames, movieResults } = aiRecommendedMovies;
  return (
    <div className="text-white mt-10 py-6 w-screen bg-black/80 bg-gradient-to-t to-transparent">
      {movieNames.map((item: any, index: number) => {
        return movieResults[index].length ? (
          <MovieList
            key={movieNames[index]}
            title={movieNames[index]}
            movies={movieResults[index]}
          />
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default GptMovieSuggestion;
