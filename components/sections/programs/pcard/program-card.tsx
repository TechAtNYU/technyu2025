import React from 'react'
import './style.css'
import { ProgramCardProps } from '@/lib/types'
import Image from 'next/image'
import ProgramBar from './program-bar'

const ProgramCard = ({ProgramDetail, variant}: {ProgramDetail: ProgramCardProps, variant: string}) => {
  const { name, url, svgicon, tagline, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''} flex `}>
      <div className='w-full lg:w-[60vw] flex justify-between flex-col sm:flex-row'>
      <div className='flex flex-col w-full sm:w-[70%] sm:p-10 p-8'>
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
      </div>
      <div className='flex sm:flex-col justify-between p-6 sm:p-10 w-full sm:w-[30%] items-end'>
        {/* ProgramBar: color and text can be customized as needed */}
          <ProgramBar color="red" text="Apps Closed" />

          <a href={url} className='bg-gray-700/40 hover:bg-gray-400/30 text-white hover:scale-105 duration-300 transition-all ease-in-out w-24 h-16 flex justify-center items-center '>
          <p className=''>MORE</p>
        </a>
      </div>
      </div>
      <div className='w-[40vw] hidden lg:block'>
        <Image
          src={`/team_pics/cyan-yan.jpg`}
          alt={`${name} logo`}
          width={200}
          height={200}
          className='object-contain w-full h-full'
        />
      </div>
    </div>
  )
}

export default ProgramCard

