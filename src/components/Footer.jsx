import React from 'react'
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { CiVolumeHigh } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer className='fixed bottom-0 left-0 right-0 border-t-2  mx-auto bg-[#F6F6F6] border-[#E9E9E9]'>
        <div className=' md:mx-4 p-4 flex flex-row  justify-around md:justify-between items-center '>
          <div className=''>
            <img
              src='https://placehold.co/600x400'
              className='w-[80px] h-auto rounded-2xl'
            />
          </div>
          <div className='flex gap-5 text-3xl text-[#9A9A9A]'>
            <FaRepeat />
            <GrChapterPrevious />
            <FaCirclePlay />
            <GrChapterNext />
          </div>
          <div className='text-3xl text-[#9A9A9A]'>
            <CiVolumeHigh />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer