import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IoMdDownload } from "react-icons/io";
import bg from "../img/bg.png";

const Hero = () => {
  
  return (
    <section id="home" className='pt-24 sm:pt-28'>
      <div className="relative min-h-[70vh] sm:min-h-[78vh] overflow-hidden bg-[#21212e]">
        <Image
          src={bg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#21212e]/35 z-10"></div>
        <div className="relative z-20 h-full min-h-[70vh] sm:min-h-[78vh]">
          <div className="absolute bottom-6 left-4 right-4 sm:right-auto sm:bottom-10 sm:left-10 md:left-12 bg-black/30 backdrop-blur-[1px] px-4 sm:px-6 py-4 rounded-md w-auto sm:w-fit shadow-md">
            <div className="text-white text-xl sm:text-2xl md:text-3xl drop-shadow-md mb-2 leading-tight">
              ٱلسَّلَامُ عَلَيْكُمْ, I'm <span className="text-[#7451f3] font-bold">Uzaib</span>
            </div>
            <div className="text-white text-sm sm:text-base mb-4 drop-shadow-sm leading-relaxed max-w-md"
              id="animated-text-target">
              Well I am an Artist working to<br></br>
                make world a better place<br></br>
                  <span className="font-semibold">Know more about me below.</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
                  <button
                    className="bg-[#793fff] hover:bg-[#6b2fff] text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg shadow-[#793fff]/30 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2">
                    <IoMdDownload />Download CV
                  </button>
                  <Link href="#contact"
                    className="border-2 border-[#793fff] text-[#793fff] hover:bg-[#793fff] hover:text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-center font-medium">
                    Contact
                  </Link>
                </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Hero
