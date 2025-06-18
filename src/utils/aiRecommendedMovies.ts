import geminiAI from "../config/gemini";
import { addAiRecommended } from "../store/slice/movies";
import { TMDB_API_OPTIONS } from "./constants";

const searchMovie = async (name: string) => {
  let data: any = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      name +
      "&include_adult=true&language=en-US&page=1",
    TMDB_API_OPTIONS
  );
  data = await data.json();
  data = data?.results[0];
  return data;
};

export const handleAiSearch = async (
  searchText: any,
  dispatchAction: any,
  setError: Function,
  setLoading: Function
) => {
  if (searchText.length > 9) {
    const finalAIQuery =
      "Act as an movie recommendation system(responds with 5 movie name seprated by comma), which returns only name of 5 movies present in netflix in response, seprated by comma (example of response expected :'Sholay, Golmaal, Don, Gadar, Koi mil gaya').If query doesn't contain any information regarding movie recommendation return empty spaces.If the prompt doesn't align with guidelines in taht case return with empty spaces. Give some movie names for the query: " +
      searchText;
    try {
      const response = await geminiAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: finalAIQuery,
      });

      if (response?.text?.trim().length) {
        let movies = response.text?.trim().split(",");
        let moviePromises = movies.map((movie) => searchMovie(movie));

        let movieResults = await Promise.all(moviePromises);
        dispatchAction(addAiRecommended(movieResults));
      } else {
        setError("No movie found, please improve the prompt.");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  } else {
    setError("Input should have atleast 10 chars.");
    setLoading(false);
  }
};
