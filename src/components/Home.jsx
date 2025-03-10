import React from 'react'
import { useNavigate } from 'react-router'
import CaraoselSlider from './CaraoselSlider';
import Cards from './Cards';
import News from './News';
import CategoryFilter from './CategoryFilter';
import Slider from './Slider';
import Modal from './Modal';




const Home = () => {
  const navigate = useNavigate();
  function handlEvent (){
    navigate('/about')
  }
  return (
    <div className="bg-slate-950">
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
      <section className='px-2 md:px-5 py-20'>
        <Cards/>
      </section>
      <section className='bg-slate-800 px-2 py-20'>
        <CategoryFilter/>
      </section>
      <section className='py-20 px-20'>
       
          <Slider/>
       
      </section>
      <section>
        <News/>
      </section>
      <Modal/>

    </div>
    
  )
}

export default Home