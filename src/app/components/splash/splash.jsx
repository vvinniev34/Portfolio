import React from "react";
import Particles from "./particles";
import Glitch, { LearnMoreScroll } from "./glitch";
import Image from "next/image";

const Splash = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen overflow-hidden w-[100%]"
      id="/"
    >
      <div className="fixed w-full h-screen z-negative bg-sky-200 sm:bg-transparent" style={{zIndex:-1}}>
        <div className="hidden sm:block">
          <Image
            src="/sky_ocean_surface_brightened.png"
            alt="bright sky over ocean surface"
            width="100vh"
            height="100vh"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className={"absolute inset-0 z-0 animate-fade-in"}
        quantity={120}
      />
      <h1 className="z-10 text-transparent duration-1000 bg-black text-edge-outline animate-title font-display font-bold text-5xl sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
        Vincent Liu
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div
        className="text-center animate-fade-in flex flex-col items-center"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Glitch></Glitch>
      </div>

      <LearnMoreScroll />
    </section>
  );
};

export default Splash;
