import React from 'react'
import './style.css'
import { ValueCardProps } from '@/lib/types'
import Image from 'next/image'

const ValueCard = ({ProgramDetail, variant}: {ProgramDetail: ValueCardProps, variant: string}) => {
  const { name, url, svgicon, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''} flex justify-between flex-col sm:flex-row bg-black`}>
        <div className='bg-white'>

        </div>
      {/* <div className='flex flex-col w-full sm:w-[70%] p-5 '>
        <div className={`h-48 w-48 flex items-center justify-center relative mt-20 sm:mt-16 shadow-none ${ProgramDetail.svgicon === "/program-logos/mentorship.svg" ? "-ml-10" : "-ml-5"}`}>
          <Image 
            src={`${svgicon}`}  
            alt={`${name} logo`}
            fill
            className='w-full h-full'
          />
        </div>
        <h1 className="text-white text-5xl font-bold text-left tracking-wide pb-3">
          {name}
        </h1>
        <h2 className='text-lg text-white font-bold text-left sm:block hidden'>{tagline}</h2>
        <p className='text-white lg:text-lg'>
          {description}
        </p>
      </div> */}
      {/* <div className='flex sm:flex-col justify-between p-5 w-full sm:w-[30%] items-end'>
          <a href={url} className='bg-gray-700/40 hover:bg-gray-400/30 text-white hover:scale-105 duration-300 transition-all ease-in-out w-24 h-16 flex justify-center items-center '>
          <p className=''>MORE</p>
        </a>
      </div> */}
    </div>
  )
}

export default ValueCard

