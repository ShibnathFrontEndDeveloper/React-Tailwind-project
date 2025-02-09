import React from 'react'
import { useNavigate } from 'react-router'
import CaraoselSlider from './CaraoselSlider';
import Cards from './Cards';

const Home = () => {
  const navigate = useNavigate();
  function handlEvent (){
    navigate('/about')
  }
  return (
    <div className="h-screen">
      <div className='flex flex-col gap-3 items-center md:flex-row bg-cover bg-[url(./public/images/Slide-001.jpg)] bg-center bg-no-repeat'>
        <div className='w-full md:w-1/2'>
          <div className='pl-3 md:pl-20'>
            <h1 className='text-3xl font-bold drop-shadow-xs uppercase mb-3 text-gray-400 before:content["Helle_world"]'>Home Decoration is here</h1>
            <p className='text-gray-100'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis enim dolorem suscipit cupiditate tempore quam hic vel perferendis velit doloribus.</p>
            <button className='bg-blue-700 px-15 py-2 mt-10 text-white text-[18px] rounded-lg' onClick={handlEvent} >Read More</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-20 md:pr-20 mb-3 md:mb-20">
          <CaraoselSlider/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-screen bg-slate-950 gap-5">
        <Cards/>

      </div>
    </div>
    
  )
}

export default Home