import React from "react";
import "./css/tailwind.css";
import BgDesktop from "./assets/bg-desktop.svg";
import BgMobile from "./assets/bg-mobile.svg";
import Logo1 from "./assets/logo.svg";
import HeroImg from "./assets/illustration-mockups.svg";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
const App = () => {
  return (
    // hero section
    <section
      style={{
        "--bg-mobile": `url(${BgMobile})`,
        "--bg-desktop": `url(${BgDesktop})`,
      }}
      className="min-h-screen bg-[image:var(--bg-mobile)] mobile:bg-[image:var(--bg-desktop)] bg-violet bg-top bg-no-repeat bg-contain mobile:bg-cover bg-center px-8"
    >
      <header className="max-w-7xl mx-auto h-32  flex items-center  mobile:h-48">
        <img src={Logo1} alt="" className="h-8 mobile:h-12" />
      </header>
      {/* flex box */}
      <div className="mobile:flex mobile:items-start mobile:gap-4 justify-between max-w-7xl mx-auto">
        {/* image container */}
        <div>
          <img src={HeroImg} alt="" />
        </div>
        {/* text container */}
        <div className="text-white text-center mt-12 mobile:text-left ">
          <h2 className="font-heading text-xl font-semi max-w-[20ch] mx-auto mobile:mx-0 mobile:text-xxxl">
            Build The Community Your Fans Will Love
          </h2>
          <p className="font-body font-reg mt-4 max-w-[50ch] mx-auto mobile:mx-0">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <button className="font-body px-16 py-2 bg-white text-violet mt-8 rounded-full hover:bg-magenta hover:text-white hover:drop-shadow-lg mobile:py-4">
            Register
          </button>
        </div>
      </div>
      <footer className="text-white text-lg max-w-7xl mx-auto flex gap-2 justify-center mt-12 mobile:mt-0 mobile:justify-end mobile:text-xl py-8">
        <span className="rounded-full  w-8 h-8 mobile:w-12 mobile:h-12 border flex justify-center items-center hover:text-magenta hover:drop-shadow-lg cursor-pointer">
          <BiLogoFacebook />
        </span>
        <span className="rounded-full  w-8 h-8 mobile:w-12 mobile:h-12 border flex justify-center items-center hover:text-magenta hover:drop-shadow-lg cursor-pointer">
          <BiLogoTwitter />
        </span>
        <span className="rounded-full  w-8 h-8 mobile:w-12 mobile:h-12 border flex justify-center items-center hover:text-magenta hover:drop-shadow-lg cursor-pointer">
          <BiLogoInstagram />
        </span>
      </footer>
    </section>
  );
};

export default App;
