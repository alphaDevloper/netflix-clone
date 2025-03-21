import React, { useEffect, useRef } from "react";
import "../App.css";
import { logOut } from "../firebase";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="w-full py-5 px-[6%] flex justify-between fixed text-sm text-[#e5e5e5] z-10 navbar"
    >
      <div className="flex items-center gap-[50px]">
        <img src="/assets/logo.png" alt="" className="w-[90px]" />
        <div className="flex gap-5 cursor-pointer ul">
          <h2>Home</h2>
          <h2>TV Shows</h2>
          <h2>Movies</h2>
          <h2>New & Popular</h2>
          <h2>My List</h2>
          <h2>Browse by Language</h2>
        </div>
      </div>
      <div className="flex items-center gap-5 navbar-right">
        <img
          src="/assets/search_icon.svg"
          alt=""
          className="w-5 cursor-pointer"
        />
        <p>children</p>
        <img
          src="/assets/bell_icon.svg"
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="flex relative items-center gap-3 cursor-pointer profile">
          <img
            src="/assets/profile_img.png"
            alt=""
            className="rounded-sm w-9"
          />
          <h2
            className="text-sm py-2 px-2.5 rounded-md bg-red-500"
            onClick={() => logOut()}
          >
            Sign Out
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
