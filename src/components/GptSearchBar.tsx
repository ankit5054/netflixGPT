import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/constants";
import { useRef, useState } from "react";
import Spinner from "./helper/Spinner";
import { handleAiSearch } from "../utils/aiRecommendedMovies";
const GptSearchBar = () => {
  const queryAiValue = useRef<HTMLInputElement>(null);
  const languageSelected = useSelector(
    (store: any) => store.feature.language
  ) as keyof typeof language;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const dispatchAction = useDispatch();

  return (
    <div>
      <div className="flex justify-center w-screen pt-[10%]  ">
        <form
          className=" flex items-center z-50 w-1/2 bg-black space-x-4 py-4 px-6 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={language?.[languageSelected]?.placeholder}
            className="rounded bg-amber-50 text-lg py-2 px-2 w-full"
            ref={queryAiValue}
            maxLength={100}
            minLength={10}
            required
          />
          <button
            className="bg-red-700 text-white  rounded py-2 px-6 text-lg cursor-pointer"
            onClick={() => {
              setLoading(true);
              setError("");
              handleAiSearch(
                queryAiValue.current?.value,
                dispatchAction,
                setError,
                setLoading
              );
            }}
          >
            {loading ? <Spinner /> : language?.[languageSelected]?.search}
          </button>
        </form>
      </div>
      {
        <div className="text-red-600 flex justify-center items-center align-middle w-screen -mt-1.5 ">
          {error && <div className="w-1/2 bg-black text-md px-6">{error}</div>}
        </div>
      }
    </div>
  );
};

export default GptSearchBar;
