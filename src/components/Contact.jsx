import React from 'react'

const Contact = () => {
  return (
    <div className='w-full'>
      <form action="" className='max-w-[650px] mx-auto p-[10px] border-2 border-amber-100'>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Your Name' className='w-full focus:outline-0 focus:border-1 focus:border-red-400 border-1 border-blue-500 p-3'/>
      </form>

    </div>
  )
}

export default Contact