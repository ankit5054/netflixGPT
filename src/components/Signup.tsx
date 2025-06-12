import { Link, useNavigate } from "react-router";
import Header from "./Header";
import { useRef, useState } from "react";
import { signUpValidate } from "../utils/validate";
import { signUpUser } from "../utils/sigin";
import Spinner from "./helper/Spinner";
import { addUser } from "../store/slice/user";
import { useDispatch } from "react-redux";

export default function Signup() {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatchAction = useDispatch();

  const handleSignUpOps = async () => {
    let validateRes = signUpValidate(
      email?.current?.["value"],
      password?.current?.["value"],
      name?.current?.["value"]
    );
    if (validateRes) setErrorMessage(validateRes);
    else {
      setErrorMessage("");
      setLoading(true);
      let signUpRes = await signUpUser(
        name?.current?.["value"],
        email?.current?.["value"],
        password?.current?.["value"]
      );
      setLoading(false);
      if (signUpRes?.status == "Error") {
        setErrorMessage("Email already in use");
      } else {
        dispatchAction(addUser(signUpRes));
        navigate("/browse");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="">
        <div className="absolute bg-black">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
            alt=""
            className="opacity-55"
          />
        </div>
        <div className="flex h-screen justify-center items-center">
          <div className="w-3/12 mt-20  absolute opacity-80 bg-black p-10 space-y-10 rounded-md text-lg">
            <div className="text-white text-4xl font-bold ">Sign Up</div>
            <form
              className="  space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Full name"
                required
                ref={name}
                className=" py-3 px-4 w-full bg-transparent text-slate-200 placeholder-slate-200 border border-slate-200 rounded-sm  focus:border-2 focus:border-white"
              />
              <p className="text-red-500 -mt-4 text-sm">
                {errorMessage.search("Name") != -1 ? errorMessage : null}
              </p>
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
                {errorMessage.search("Password") != -1 ? errorMessage : null}
              </p>
              <button
                className="bg-red-600 px-4 py-2 w-full text-white font-bold rounded-sm  flex items-center justify-center text-center"
                onClick={() => {
                  handleSignUpOps();
                }}
              >
                {!loading ? (
                  <div className="hover:cursor-pointer">Sign Up</div>
                ) : (
                  <Spinner />
                )}
              </button>

              <div className="text-white text-base">
                Already a member?
                <Link to="/">
                  <span className="hover:underline font-bold hover:cursor-pointer">
                    Sign in.
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
