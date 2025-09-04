import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/Text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { MovingBorder } from './ui/MovingBorders';
import { socialMedia } from '@/data';

const HeroSecond = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative py-20 md:py-0">
      {/* Global Background for both sides */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:90px_90px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100"></div>

      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="-top-10 -left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Left side (content) */}
<div className="w-full md:w-1/2 relative flex flex-col justify-center items-center md:items-start px-6 z-10 text-center md:text-left py-10 md:py-0">
  <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
    Coding Enthusiast
  </h2>

  <TextGenerateEffect
    className="text-[40px] md:text-5xl lg:text-6xl"
    words="Hello I&apos;m Sam Carter"
  />

  <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
    Hey I&apos;m an amazing &#40;Honestly&#41; Developer based in India
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
    {/* Magic Button */}
    <a href="#projects">
      <MagicButton
        title="See some of my work"
        icon={<FaLocationArrow />}
        position="right"
      />
    </a>
    <a href="#projects">
      <MagicButton
        title="See some of my work"
        icon={<FaLocationArrow />}
        position="right"
      />
    </a>

   
  </div>
</div>


      {/* Right side (image) */}
      <div className="w-full md:w-1/2 flex items-center justify-center z-10 py-6 md:py-0">
  <div
    className="relative overflow-hidden p-[2px]" // space for animated border
    style={{ borderRadius: "9999px", width: "80%", maxWidth: "500px" }}
  >
    {/* Animated moving border */}
    <div className="absolute inset-0" style={{ borderRadius: "9999px" }}>
      <MovingBorder duration={5000} rx="50%" ry="50%">
        <div className="h-40 w-40 bg-[radial-gradient(#e90e12_40%,transparent_60%)] opacity-80" />
      </MovingBorder>
    </div>
    <div className="absolute inset-0" style={{ borderRadius: "9999px" }}>
      <MovingBorder duration={5000} rx="50%" ry="50%">
        <div className="h-40 w-40 bg-[radial-gradient(#e90e12_40%,transparent_60%)] opacity-80" />
      </MovingBorder>
    </div>

    {/* Actual image */}
    <div
      className="relative flex items-center justify-center border border-slate-800 bg-slate-900/30 backdrop-blur-xl"
      style={{ borderRadius: "9999px" }}
    >
      <img
        src="/1694116892773.jpg"
        alt="Sam Developer"
        className="w-full h-full aspect-square object-cover rounded-full shadow-lg opacity-80"
      />
    </div>
  </div>
</div>
    </div>
  );
}

export default HeroSecond
