import React from 'react'
import logo from '../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className=' bg-[#F6F6F6] h-[110px] md:h-[70px] '>
      <div className=' flex flex-col gap-3  justify-around mx-4 md:flex-row md:gap-0 md:justify-between md:items-center md:pt-4'>
        {/* first div  */}
        <div className='flex  justify-between items-center md:gap-3'>
          <div className='flex  items-center gap-2  '>
            <img src={logo} alt='logo' className='size-10 ' />
            <h2 className=' font-extrabold cursor-pointer text-cyan-500'>Play Time</h2>
          </div>
          <div className='flex  gap-3'>
            <li className=' list-none cursor-pointer'>Music</li>
            <li className=' list-none  cursor-pointer'>Podcast</li>
            <li className=' list-none cursor-pointer'>Pro</li>
          </div>
        </div>
        {/* second div  */}
        <div className='flex justify-start items-center gap-3 md:w-[60%] '>
          <input
            type='text'
            placeholder='Search Music,Album'
            className=' p-2 w-[80%] outline-none rounded-1xl outline-cyan-100 '
          />
          <FaSearch className=' text-2xl text-cyan-500' />
        </div>
        {/* third div  */}
        <div className='hidden md:flex   items-center gap-3'>
          <div className='flex items-center gap-2'>
            <h2 className=' cursor-pointer'>Music Languages</h2>
            <IoIosArrowDown className=' cursor-pointer' />
          </div>
          <div className='flex gap-2'>
            <li className=' list-none cursor-pointer'>Login</li>
            <li className=' list-none cursor-pointer'>Sign Up</li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar