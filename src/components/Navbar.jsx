import React from 'react'
import { Link, NavLink } from 'react-router'
import { FaPhoneVolume } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";

import MenulistBar from './MenulistBar'


const Navbar = () => {
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
      <div className="block md:flex justify-between bg-slate-950 pl-2 pr-2 md:pl-20 md:pr-20">
        <ul className='flex gap-5'>
            <li><NavLink to='/' className={({isActive})=>isActive? 'text-white font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Home</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=>isActive? 'text-white font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Contact</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=>isActive? 'text-white font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>About</NavLink></li>
            <li><NavLink to='/gallery' className={({isActive})=>isActive? 'text-white font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Galler</NavLink></li>
            <li><NavLink to='/signup' className={({isActive})=>isActive? 'text-white font-medium py-4 block uppercase':"font-medium  text-white py-4 block uppercase"}>Signup</NavLink></li>
        </ul>
        <div className=" bg-amber-400">
          <NavLink className="flex items-center leading-13 uppercase px-5 "><SlGraph className=' text-white text-2xl rotate-0 mr-1 '/>free need analysis</NavLink>
        </div>
        {/* <MenulistBar/> */}
      </div>
        


        </>
      
    
  )
}

export default Navbar