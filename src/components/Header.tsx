import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../store/slice/user";
import { signOutUser } from "../utils/signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatchAction = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);

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
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <div className="flex absolute w-full px-12 py-5 bg-gradient-to-b from-10%  from-black z-20 justify-between align-middle">
      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          className="w-36"
        />
      </div>
      {user.accesstoken && (
        <div
          className="flex space-x-2 align-middle"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <img
            src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfUlmnFRKf_OEUhru2aqso39FKxONTd5Dt_sWnNj5wAg4bbMBZ8sgZupTfnB9IQ8tmWcrzRiyZsCp1bLKb_n7VrnTw3_Ovw7Q.png?r=bd7"
            alt=""
            className="w-12 h-12"
          />
          <img
            src="https://www.svgrepo.com/show/108052/arrow-down-filled-triangle.svg"
            alt=""
            className={`w-3 text-white ${
              showMenu ? "rotate-180" : ""
            }  duration-500`}
          />
          {showMenu && (
            <div
              className="relative inline-block text-left  "
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-12 w-48 rounded-md  z-50 bg-black  text-white opacity-80">
                <div className="py-1 text-sm ">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:cursor-pointer "
                  >
                    Profile
                  </a>
                  {/* <hr className="border border-amber-50" /> */}
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:cursor-pointer"
                  >
                    Settings
                  </a>
                  {/* <hr className="border border-amber-50" /> */}

                  <button
                    onClick={() => {
                      signOutUser();
                    }}
                    className="w-full text-left px-4 py-2 hover:cursor-pointer "
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
