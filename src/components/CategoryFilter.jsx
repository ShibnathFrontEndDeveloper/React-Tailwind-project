import React, { useState } from 'react'
import DataItems from './DataItems'


function CategoryFilter() {
    const [items, setItems] =useState(DataItems);
    const changeItems = (categItem)=>{
        const updateItems = DataItems.filter((currentElem)=>{
            return currentElem.category ===categItem;
        });
        setItems(updateItems)
    }

   
  return (
    <div className='md:px-20'>
        <div className='' >
            <h1 className=" text-slate-500 text-3xl md:text-4xl  mb-8 relative">Our Gallery
            <span className='absolute bottom-0 left-0 translate-[-50% ,-50%] w-20 bg-amber-400 h-0.5 rounded-3xl'></span>
            </h1>
        </div>
        <div className="flex gap-3 mb-5 overflow-auto">
            <button className='text-white uppercase font-bold'onClick={()=>changeItems('sofa')}>Sofa</button>
            <button className='text-white uppercase font-bold' onClick={()=>changeItems('chair')}>Chair</button>
            <button className='text-white uppercase font-bold' onClick={()=>changeItems('almira')}>Almira</button>
            <button className='text-white uppercase font-bold' onClick={()=>changeItems('table')}>Table</button>
            <button className='text-white uppercase font-bold' onClick={()=>changeItems('bed')}>Bed</button>
            <button className='text-white uppercase font-bold' onClick={()=>changeItems('light')}>Light</button>
            <button className='text-white uppercase font-bold' onClick={()=>setItems(DataItems)}>All</button>

        </div>
        <div className="w-full flex flex-wrap gap-2">
            {
                items.map((elem)=>{
                    const {itemId, itemName, itemPic, itemTag, itemPrice, itemDesc}= elem;
                    return(
                        
                        <div className="md:w-36 border-2 border-amber-400">
                            <img src={itemPic} alt="Image" />
                            <div className="px-2">
                                <p className='text-white'>{itemName}</p>
                                <p className='text-slate-300 text-[10px]'>{itemDesc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryFilter