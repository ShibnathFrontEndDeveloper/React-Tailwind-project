import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FaPhoneVolume,FaUser } from "react-icons/fa";
import { CiMail,CiSearch } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";




const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
    <div className='@container  bg-slate-800'>
      <div className='flex justify-between items-center flex-col md:flex-row xs:flex-col py-3 mx-2 md:mx-20'>
        <div className=''><Link to={'/'}><img src={'./public/images/logo-02.png'} className='w-40'/></Link></div>
        <div className='flex gap-1'>
          <Link to={'tel:+91 8420676255'} className='flex items-center gap-0.5 bg-gray-300 px-2.5 rounded-lg h-[40px]'><FaPhoneVolume/><span className='text-xs'>+91 8420676255</span></Link>
          <Link to={'mailto:infoclaycan.com'} className='flex items-center gap-0.5 bg-gray-300 px-2.5 rounded-lg h-[40px]'><CiMail/><span className='text-xs'>Email:infoclaycan.com</span></Link>
        </div>
      </div>
    </div>
      <div className="flex justify-between items-center bg-slate-950 pl-2 pr-2 md:pl-20 md:pr-20">
        <div className='bg-white text-center text-red-600  md:hidden' onClick={()=>setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        {/* Desktop menubar */}
        <ul className='hidden md:flex md:gap-5' >
            <li><NavLink to='/' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Home</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Contact</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>About</NavLink></li>
            <li><NavLink to='/gallery' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Galler</NavLink></li>
            <li><NavLink to='/signup' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Signup</NavLink></li>
            <li><NavLink to='/news' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>News</NavLink></li>
        </ul>
        {/* Profile panel */}
        <div className="flex gap-3">
          <div className="hover:bg-amber-400 hover:text-slate-900 text-white p-[10px] rounded-4xl duration-500 ease-in-out">
            <CiSearch />
          </div>
          <div className="hover:bg-amber-400 hover:text-slate-900 text-white p-[10px] rounded-4xl duration-500 ease-in-out">
          <FaCartShopping />
          </div>
          <div className="hover:bg-amber-400 hover:text-slate-900 text-white p-[10px] rounded-4xl duration-500 ease-in-out">
            <FaUser />
          </div>
        </div>
      </div>

      {/* Responsive Menubar */}
      {open &&
        <ul className=' block absolute bg-slate-800 z-10 h-dvh w-full pl-5 md:hidden' >
            <li><NavLink to='/' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Home</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Contact</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>About</NavLink></li>
            <li><NavLink to='/gallery' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Galler</NavLink></li>
            <li><NavLink to='/signup' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Signup</NavLink></li>
            <li><NavLink to='/news' className={({isActive})=>isActive? 'text-amber-400 font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>News</NavLink></li>
        </ul>
      }
        


        </>
      
    
  )
}

export default Navbar