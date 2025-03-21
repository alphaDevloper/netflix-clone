import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero relative">
        <img
          src="/assets/hero_banner.jpg"
          alt=""
          className="w-full bg-gradient-to-r from-transparent via-black/75 to-black maskImage"
        />
        <div className="hero-caption absolute  w-full pl-[6%] bottom-0">
          <img
            src="/assets/hero_title.png"
            alt=""
            className="w-[90%] max-w-[420px] mb-[30px] caption-img"
          />
          <p className="max-w-[700px] text-lg mb-5 ">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className=" flex gap-[10px] mb-12  hero-btns">
            <button className="border-0 outline-0 py-2 px-5 inline-flex items-center gap-[10px] text-sm bg-white rounded cursor-pointer text-black hover:bg-[#ffffffbf] btn">
              <img src="/assets/play_icon.png" alt="" className="w-6" />
              Play
            </button>
            <button className="text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] border-0 outline-0 py-2 px-5 inline-flex items-center gap-[10px] text-sm rounded cursor-pointer btn">
              <img src="/assets/info_icon.png" alt="" className="w-6" />
              Info
            </button>
          </div>
          <div className="hidden lg:block">
            <TitleCard />
          </div>
        </div>
      </div>
      <div className="pl-[6%] more-cards">
        <TitleCard title="Blockbuster Movies" category="top_rated" />
        <TitleCard title="Only on Netflix" category="popular" />
        <TitleCard title="Upcoming" category="upcoming" />
        <TitleCard title="Top Pics for You " category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
// linear-gradient(to right, transparent, black 75%);
// -webkit-mask-image: linear-gradient(to right, transparent, black 75%);
