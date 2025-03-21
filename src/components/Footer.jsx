import React from "react";

const Footer = () => {
  return (
    <div className=" py-[30px] px-[4%] max-w-5xl my-0 mx-auto">
      <div className="icons flex gap-5 my-10 mx-0">
        <img
          src="/assets/facebook_icon.png"
          alt=""
          className="lg:w-[30px] cursor-pointer w-[20px]"
        />
        <img
          src="/assets/twitter_icon.png"
          alt=""
          className="lg:w-[30px] cursor-pointer w-[20px]"
        />
        <img
          src="/assets/instagram_icon.png"
          alt=""
          className="lg:w-[30px] cursor-pointer w-[20px]"
        />
        <img
          src="/assets/youtube_icon.png"
          alt=""
          className="lg:w-[30px] cursor-pointer w-[20px]"
        />
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 mb-8 grid-cols-2 gap-8 text-xs lg:text-xl">
        <h2>Audio Description</h2>
        <h2>Help Centre</h2>
        <h2>Investor Relations</h2>
        <h2>Jobs</h2>
        <h2>Terms of Use</h2>
        <h2>Privacy</h2>
        <h2>Contact Us</h2>
        <h2>Cookie Preferences</h2>
        <h2>Contact Us</h2>
      </div>
      <p className="text-gray-400 text-sm">&copy; 1997 - 2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
