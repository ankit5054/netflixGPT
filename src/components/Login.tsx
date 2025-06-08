import { Link } from "react-router";
import Header from "./Header";

export default function Login() {
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
            <div className="text-white text-4xl font-bold ">Sign In</div>
            <form className="  space-y-4">
              <input
                type="email"
                placeholder="Email or mobile number"
                className=" py-3 px-4 w-full bg-transparent text-slate-200 placeholder-slate-200 border border-slate-200 rounded-sm  focus:border-2 focus:border-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="  py-3 px-4  w-full bg-transparent text-slate-200 placeholder-slate-200 border border-slate-200 rounded-sm focus:border-2 focus:border-white"
              />
              <button className="bg-red-600 px-4 py-2 w-full text-white font-bold rounded-sm hover:cursor-pointer">
                Sign In
              </button>
              <div className="text-white text-center">OR</div>
              <button className="w-full bg-neutral-500 text-white  py-3 px-4 rounded-sm  hover:cursor-pointer">
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
