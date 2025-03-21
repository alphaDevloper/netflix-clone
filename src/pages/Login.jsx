import React, { useState } from "react";
import { login, signup } from "../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };
  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <img src="/assets/netflix_spinner.gif" alt="" className="w-14" />
    </div>
  ) : (
    <div className="h-[100vh] login-img py-5 px-[8%] sm:py-4 sm:px-[5%]">
      <img src="/assets/logo.png" alt="" className=" w-[150px]" />
      <div className="form w-full max-w-[450px] bg-black/75 rounded p-[60px] m-auto mt-5">
        <h1 className="text-3xl font-medium mb-[28px] text-white">
          {signState}
        </h1>
        <form className="sm:p-5 mt-7">
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-[16px] px-[20px] text-[16px] font-medium"
              type="text"
              placeholder="Enter your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-[16px] px-[20px] text-[16px] font-medium"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-[16px] px-[20px] text-[16px] font-medium"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={userAuth}
            type="submit"
            className="w-full border-0 outline-0 p-[16px] bg-red-500 rounded text-[16px] font-medium mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="form-help mt-5 flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="remember flex items-center gap-1.5">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <label>Remember Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className=" mt-[40px] text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => setSignState("Sign Up")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setSignState("Sign In")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
