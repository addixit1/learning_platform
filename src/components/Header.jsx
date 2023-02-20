import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
export const Header = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#1037fa] p-4'>
        <div className='max-w-[1240px] py-[10px]  flex justify-between items-center  mx-auto'>
            <div className='text-3xl font-bold text-yellow-50'>Aman Bussiness</div>


            {
                toggle ?<AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
            {/* <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/> */}

            <ul className='hidden md:flex text-white gap-14'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Resources</li>

            </ul>
            {/* Responsive copy of header items */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] ${ toggle ? ' left-[0] ' : 'left-[-100%]' } `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
                <li className='p-5'>Resources</li>

            </ul>
        </div>
    </div>
  )
}

export default Header;