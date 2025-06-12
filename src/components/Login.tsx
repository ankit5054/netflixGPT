import { Link, useNavigate } from "react-router";
import Header from "./Header";
import { signInValidate } from "../utils/validate";
import { useRef, useState } from "react";
import { signInUser } from "../utils/sigin";
import Spinner from "./helper/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slice/user";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatchAction = useDispatch();
  // const userStore = useSelector((store)=>store?.user)

  const handleSigninOps = async () => {
    let validateRes = signInValidate(email?.current?.["value"]);
    if (validateRes) setErrorMessage(validateRes);
    else {
      setLoading(true);
      setErrorMessage("");
      let signInRes = await signInUser(
        email?.current?.["value"],
        password?.current?.["value"]
      );
      setLoading(false);
      if (signInRes.status === "Error") {
        setErrorMessage("Invalid Credentials");
      } else {
        dispatchAction(addUser(signInRes));
        navigate("/browse");
      }
    }
    return;
  };

  return (
    // userStore.accessToken
    <div>
      <Header />
      <div className="">
        <div className="absolute bg-black  ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
            alt=""
            className="opacity-55"
          />
        </div>
        <div className="flex h-screen justify-center items-center">
          <div className="w-3/12 mt-20  absolute opacity-80 bg-black p-10 space-y-10 rounded-md text-lg">
            <div className="text-white text-4xl font-bold ">Sign In</div>
            <form
              className="  space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                ref={email}
                type="email"
                placeholder="Email or mobile number"
                required
                className=" py-3 px-4 w-full bg-transparent text-slate-200 placeholder-slate-200 border border-slate-200 rounded-sm  focus:border-2 focus:border-white"
              />
              <p className="text-red-500 -mt-4 text-sm">
                {errorMessage.search("Email") != -1 ? errorMessage : null}
              </p>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                required
                className="  py-3 px-4  w-full bg-transparent text-slate-200 placeholder-slate-200 border border-slate-200 rounded-sm focus:border-2 focus:border-white"
              />
              <p className="text-red-500 -mt-4 text-sm">
                {errorMessage.search("Cred") != -1 ? errorMessage : null}
              </p>
              <button
                className="bg-red-600 px-4 py-2 w-full text-white font-bold rounded-sm hover:cursor-pointer"
                onClick={() => handleSigninOps()}
              >
                {!loading ? (
                  <div className="hover:cursor-pointer">Sign In</div>
                ) : (
                  <Spinner />
                )}
              </button>
              <div className="text-white text-center">OR</div>
              <button
                className="w-full bg-neutral-500 text-white  py-3 px-4 rounded-sm  hover:cursor-pointer"
                onSubmit={(e) => e.preventDefault()}
              >
                Use a sign-in code
              </button>
              <div className="text-white underline text-center hover:cursor-pointer">
                Forgot Password?
              </div>
              <div className="text-white space-x-3 align-middle">
                <input
                  type="checkbox"
                  name="Remember me"
                  id=""
                  className="w-4 h-4 accent-amber-50 hover:cursor-pointer "
                />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <div className="text-white text-base">
                New to Netflix?
                <Link to="/signup">
                  <span className="hover:underline font-bold hover:cursor-pointer">
                    Sign up now.
                  </span>
                </Link>
              </div>
              <div className="text-sm text-gray-300">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </div>
              <div className="text-sm text-blue-500 underline hover:cursor-pointer">
                Learn more.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
