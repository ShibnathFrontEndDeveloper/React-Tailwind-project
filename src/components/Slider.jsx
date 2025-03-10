import React, { useState } from 'react'
import DataItems from './DataItems'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube , EffectFade, Autoplay, Controller, Navigation} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function Slider() {
  const [slideItems, setSlideItems] = useState(DataItems);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <Swiper modules={[EffectFade, Autoplay, Controller, Navigation]} controller={{ control: controlledSwiper }} navigation={true}  spaceBetween={50} slidesPerView={3} autoplay={{delay:5000,disableOnInteraction: false, }} breakpoints={{
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}>
      {slideItems.map((el) => {
        const{itemPic,category}=el;
        return <SwiperSlide>
                  <div className="flex flex-col gap[3px] w-full h-80 bg-red-500 text-white uppercase"><img src={itemPic} alt="Item pic" className=' w-full h-[300px]'/>{category}</div>
                </SwiperSlide>;
      })}
    </Swiper>
  )
}

export default Slider



