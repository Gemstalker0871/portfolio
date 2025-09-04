import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/Text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaDownload, FaLocationArrow } from 'react-icons/fa';
import { MovingBorder } from './ui/MovingBorders';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='-top-10 -left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>


        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
            <div
                className={cn(
                "absolute inset-0",
                "[background-size:90px_90px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100"></div>
           
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center relative my-20 z-10 gap-10 -mt-10">


        <div className="flex justify-center relative my-20 z-10 items-start md:items-start">
  <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:items-start justify-center">
    <h2 className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
      Coding Enthusiast
    </h2>

    <TextGenerateEffect
      className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
      words="Hello I&apos;m Sambhav Chugh"
    />

    <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
      Hey there, I&apos;m an amazing &#40;Honestly&#41; developer based in India
    </p>

     <div className="flex gap-4 mt-4">
    <a href="#projects">
      <MagicButton
        title="See Some Of My Work"
        icon={<FaLocationArrow />}
        position="right"
      />
    </a>
    <a target="_blank" href="https://drive.google.com/file/d/1d9INmPZ2fdiEUKpz7HyQOHE17hILkNZo/view?usp=sharing">
      <MagicButton
        title="Download My Resume"
        icon={<FaDownload />}
        position="right"
      />
    </a>
  </div>
  </div>
</div>
        <div className="w-full md:w-1/2 flex items-center justify-center z-10 py-6 md:py-0">
  <div className="w-full sm:w-[80%] max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] relative overflow-hidden p-[2px]" 
     style={{ borderRadius: "9999px" }}>
  
  {/* Animated moving borders */}
  <div className="absolute inset-0" style={{ borderRadius: "9999px" }}>
    <MovingBorder duration={5000} rx="50%" ry="50%">
      <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-72 lg:w-72 bg-[radial-gradient(#93b7ed_40%,transparent_60%)] opacity-80" />
    </MovingBorder>
  </div>

  {/* Actual image */}
  <div className="relative flex items-center justify-center border border-slate-800 bg-slate-900/30 backdrop-blur-xl" 
       style={{ borderRadius: "9999px" }}>
    <img
      src="/1694116892773.jpg"
      alt="Sam Developer"
      className="w-full h-full aspect-square object-cover rounded-full shadow-lg opacity-90"
    />
  </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Hero