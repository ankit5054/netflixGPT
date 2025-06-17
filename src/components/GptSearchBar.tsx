import { CircleX } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGpt } from "../store/slice/feature";
import { language } from "../utils/constants";
const GptSearchBar = () => {
  const dispatchAction = useDispatch();
  const languageSelected: any = useSelector(
    (store: any) => store.feature.language
  );

  return (
    <div className="w-screen pt-[10%] space-y-5 ">
      <div className="flex justify-center ">
        <CircleX
          size={40}
          className="inline-block cursor-pointer hover:scale-105 duration-200 hover:rotate-90"
          color="white"
          onClick={() => dispatchAction(toggleGpt())}
        />
      </div>
      <div className="flex justify-center">
        <form
          className=" flex items-center z-50 w-1/2 bg-black space-x-4 py-4 px-6 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={language?.[languageSelected]?.placeholder}
            className="rounded bg-amber-50 text-lg py-2 px-2 w-5/6"
          />
          <button className="bg-red-700 text-white rounded py-2 px-6 text-lg cursor-pointer">
            {language?.[languageSelected]?.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
