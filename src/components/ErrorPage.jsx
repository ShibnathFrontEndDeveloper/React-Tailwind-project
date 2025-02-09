import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <div className="flex flex-col items-center h-dvh bg-cyan-800 justify-center">
            <h1 className='animate-bounce text-7xl font-bold text-zinc-100'>Sorry Your Page Not Found</h1>
            <p>Check Your Browser Routes</p>
        </div>
    </div>
  )
}

export default ErrorPage