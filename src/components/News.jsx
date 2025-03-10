import React from 'react'

function News() {
  return (
    <div className='w-full px-20 flex justify-center items-center py-20 bg-slate-700 '>
      <form action="" className='w-3xl border-1 border-cyan-400 rounded-md px-10 py-10 h-[200px]'>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name' className='p-[10px] my-3 focus:border-1 focus:outline-0 border-1 rounded-lg'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default News