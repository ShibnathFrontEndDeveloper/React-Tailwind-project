import React from 'react'
import img1 from '../assets/images/almira.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router';



function Cards() {
  const [productImage, setProductImage] = useState([
    {
      id:1,
      name :'Almira',
      url:'../images/almira.jpg',
      desc:'Luxsory Almira for you'
    }
    ,
    {
      id:2,
      name :'Almira',
      url:'../images/chair-2.jpg',
      desc:'Luxsory Chair Set for you'
    },
    {
      id:3,
      name :'Table',
      url:'../images/table-set.jpg',
      desc:'I am a Table'
    },
    {
      id:4,
      name :'Sofa',
      url:'../images/sofa-2.jpg',
      desc:'Luxsory Sofa for you'
    },
    {
      id:4,
      name :'Bed',
      url:'../images/bed.jpg',
      desc:'Luxsory Bed for you'
    },

  ])
  const navigat = useNavigate()
  function handlEvent(){
      navigat('/ProductDitails')
  }
  return (
    <div className='md:px-15'>
      <h1 className='my-2 text-slate-500 text-3xl md:text-4xl  mb-8 relative'>Our Products
        <span className='absolute bottom-0 left-0 translate-[-50% ,-50%] w-20 bg-amber-400 h-0.5 rounded-3xl'></span>
      </h1>
      <div className='flex flex-col md:flex-row gap-3'>
        {productImage.map((product)=>(
            <div className="border-1 border-slate-300 w-full h-[300px] rounded-2xl overflow-hidden hover:bg-red-400 transition">
              <img src={product.url} alt="i am image"  className='cursor-pointer hover:scale-[1.1] transition h-40 w-full object-cover'/>
              <div className="px-5 mt-2">
                <h1 className='text-3xl text-slate-400'>{product.name}</h1>
                <p className='text-white '>{product.desc}</p>
                <div className="my-3">
                  <button  className='bg-indigo-700 text-white rounded-[14px] px-3 py-1' onClick={handlEvent}>Buy Now</button>
                </div>
              </div>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cards