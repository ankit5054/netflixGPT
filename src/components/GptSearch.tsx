import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 bg-black">
        <img
        className=" opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
