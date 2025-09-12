import React from 'react'
import './style.css'
const ProgramCard = () => {
  return (
    <div className="rectangle green flex justify-between">
      <div className='flex flex-col w-[50%] p-5 '>
        <div className='h-48 w-48 bg-white'>
        LOGO HERE
        </div>
        <h1 className="text-white text-3xl font-bold text-left">
          Program Card
        </h1>
        <h2 className='text-lg text-white font-bold text-left'>F**K albert, we're building a better one</h2>
        <p>
          Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
        </p>
      </div>
      <div className='flex flex-col justify-between p-5 w-[30%] items-end'>
        <div className='w-full border-1 border-white rounded-2xl py-2 flex justify-between items-center'>
          <p className='text-white ml-5'>Apps open</p>
            <div className="w-4 h-4 mr-3 rounded-full bg-green-500 shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]"></div>
        </div>

        <div className='bg-gray-700/40 hover:bg-gray-400/30 text-white hover:scale-105 duration-300 transition-all ease-in-out w-24 h-16 flex justify-center items-center '>
         <p className=''>MORE</p>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard

