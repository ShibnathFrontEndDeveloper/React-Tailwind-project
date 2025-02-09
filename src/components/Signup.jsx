import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center bg-blue-900'>
        <div className="py-12 border-1 border-gray-500 my-20 ">
            <h1 className='text-center mb-5 font-black text-3xl text-white'>Create Your Account</h1>
            <form action="" className='w-100 px-10'>
                <div className="flex flex-col">
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder='Your Name'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup