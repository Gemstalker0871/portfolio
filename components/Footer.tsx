'use client'
import React, { useState } from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'framer-motion/client'
import { IoCopyOutline } from 'react-icons/io5'





const Footer = () => {

    const [copied, setCopied] = useState(false)

     const handleCopy = () => {
    navigator.clipboard.writeText('sambhavchugh2004@gmail.com')

    setCopied(true)

    setTimeout(() => {
    setCopied(false);
  }, 5000);
  }

  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out today and Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, </p>
             <MagicButton 
            title={copied ? 'Email copied' : 'Copy my email'}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="`bg-[#161a31]`"
            handleClick={handleCopy}
            />
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright @ 2025 Sambhav</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={profile.link} target="_blank">
                        <img src={profile.img} alt="" width={20} height={20}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer