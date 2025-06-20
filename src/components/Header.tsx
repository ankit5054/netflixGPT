import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../store/slice/user";
import { signOutUser } from "../utils/signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setLanguage, toggleGpt } from "../store/slice/feature";
import { language } from "../utils/constants";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatchAction = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);
  const feature = useSelector((store: any) => store.feature);

  const handleGptClick = () => {
    dispatchAction(toggleGpt());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatchAction(
          addUser({
            accessToken: (user as any)?.stsTokenManager?.accessToken,
            refreshToken: (user as any)?.stsTokenManager?.refreshToken,
            displayName: (user as any)?.displayName,
            email: (user as any)?.email,
            uid: (user as any)?.uid,
          })
        );
        navigate("/browse");
      } else {
        dispatchAction(removeUser());
        window.location.pathname == "/signup"
          ? navigate("/signup")
          : navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <>
      <div className="flex md:hidden">
        <MobileHeader
          feature={feature}
          dispatchAction={dispatchAction}
          setLanguage={setLanguage}
          language={language}
          handleGptClick={handleGptClick}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          signOutUser={signOutUser}
          user={user}
        />
      </div>
      <div className=" hidden md:flex  absolute w-full sm:px-8  py-5 bg-gradient-to-b from-10%  from-black z-20 justify-between   ">
        <div className="flex md:w-fit w-screen justify-center md:justify-normal">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
            className="md:w-36 sm:w-28 w-28 "
          />
        </div>
        {user.accesstoken && (
          <div className="flex space-x-6 align-middle items-center">
            {feature.gptSearch && (
              <div className="">
                <select
                  name=""
                  id=""
                  className="text-white py-2 rounded-md bg-transparent"
                  defaultValue={feature?.language}
                  onChange={(e) => dispatchAction(setLanguage(e.target.value))}
                >
                  {Object.keys(language).map((i: string) => (
                    <option
                      key={i}
                      className="text-black bg-transparent"
                      value={i}
                    >
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <button
                className="cursor-pointer py-2 px-4 rounded-lg bg-gradient-to-bl from-blue-900 to-red-500 text-white hover:scale-105 duration-300  shadow-md shadow-red-500/50 "
                onClick={() => handleGptClick()}
              >
                {feature.gptSearch ? "Homepage" : "AI Search"}
              </button>
            </div>
            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {/* Avatar */}
              <img
                src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfUlmnFRKf_OEUhru2aqso39FKxONTd5Dt_sWnNj5wAg4bbMBZ8sgZupTfnB9IQ8tmWcrzRiyZsCp1bLKb_n7VrnTw3_Ovw7Q.png?r=bd7"
                alt="User"
                className="md:w-12 md:h-12 sm:w-8 sm:h-8 w-6 h-6  cursor-pointer duration-300 hover:scale-105"
              />

              {/* Dropdown */}
              {showMenu && (
                <div className="absolute top-[6%] right-0 bg-gray-800 text-white rounded-md opacity-90 z-50 w-36 ">
                  <button
                    onClick={signOutUser}
                    className="hover:cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
