import React from 'react'
import './style.css'
import { ProgramCardProps } from '@/lib/consts'
import Image from 'next/image'

const ProgramCard = ({ProgramDetail, variant}: {ProgramDetail: ProgramCardProps, variant: string}) => {
  const { name, url, svgicon, tagline, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''} flex justify-between flex-col sm:flex-row`}>
      <div className='flex flex-col w-full sm:w-[70%] p-5 '>
        <div className='h-36 w-36 flex items-center justify-center relative mt-20 sm:mt-16 shadow-none'>
          <Image 
            src={`${svgicon}`}  
            alt={`${name} logo`}
            fill
            className='w-full h-full bg-none'
          />
        </div>
        <h1 className="text-white text-5xl font-bold text-left tracking-wide pb-3">
          {name}
        </h1>
        <h2 className='text-lg text-white font-bold text-left sm:block hidden'>{tagline}</h2>
        <p className='text-white lg:text-lg'>
          {description}
        </p>
      </div>
      <div className='flex sm:flex-col justify-between p-5 w-full sm:w-[30%] items-end'>
        <div className='w-[40%] sm:w-64 lg:w-[30vw] lg:max-w-[400px] border-1 border-white rounded-2xl py-2 flex justify-between items-center'>
          <p className='text-white ml-5'>Apps open</p>
          <div className="w-4 h-4 mr-3 rounded-full bg-green-300/90 shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]"></div>
        </div>

        <a href={url} className='bg-gray-700/40 hover:bg-gray-400/30 text-white hover:scale-105 duration-300 transition-all ease-in-out w-24 h-16 flex justify-center items-center '>
         <p className=''>MORE</p>
        </a>
      </div>
    </div>
  )
}

export default ProgramCard

