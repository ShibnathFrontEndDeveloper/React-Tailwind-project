import React, { useState } from 'react'
import { Carousel } from "@material-tailwind/react";
import DataItems from './DataItems';


function CaraoselSlider() {
  
  return (
    <Carousel transition={{ duration: 1 }} loop={'true'} className="rounded-xl">
      
      <img
        src="./public/images/Slide-1.webp"
        alt="image 1"
        className=" w-full object-cover md:h-full"
      />
      <img
        src="./public/images/Slide-2.webp"
        alt="image 2"
        className=" w-full object-cover md:h-full"
      />
      <img
        src="./public/images/Slide-3.webp"
        alt="image 3"
        className=" w-full object-cover md:h-full"
      />
    </Carousel>
    
  )
}

export default CaraoselSlider