import React from 'react'
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { CiVolumeHigh } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer className='fixed bottom-0 left-0 right-0 border-t-2  bg-[#F6F6F6] border-[#E9E9E9] '>
        <div className=' md:mx-4 p-4 flex flex-row  justify-between md:justify-between items-center '>
          <img
            src='https://placehold.co/600x400'
            className='w-[80px] h-auto rounded-2xl'
          />

          <div className='w-72 flex gap-7 text-3xl text-[#9A9A9A] items-center'>
            <FaRepeat  className=' cursor-pointer'/>
            <GrChapterPrevious  className=' cursor-pointer'/>
            <FaCirclePlay className=' cursor-pointer' />
            <GrChapterNext  className=' cursor-pointer'/>
          </div>
          
            <CiVolumeHigh className='text-3xl text-[#9A9A9A] cursor-pointer' />
          
        </div>
      </footer>
    </>
  );
}

export default Footer