import React from 'react'
import './style.css'
import { ValueCardProps } from '@/lib/types'
import Image from 'next/image'

const ValueCard = ({ProgramDetail, variant}: {ProgramDetail: ValueCardProps, variant: string}) => {
  const { name, url, svgicon, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''}`}>
        {/* <div className={` w-full h-full`}> */}
            <div className={`text-white h-[10vh] bg-transparent outline-2 outline-white w-full flex items-center justify-start px-5`}>
                <h1>
                    {name}
                </h1>
            </div>
      <div className='flex items-center justify-center w-full md:h-[40vh]'>
        <div className='flex flex-row items-center justify-between md:gap-6 w-full h-full p-10 sm:p-10'>
          <p className='text-white text-lg lg:text-[2svw] text-left min-w-[100px]'>{description}</p>
          <Image 
            src={svgicon}  
            alt={`${name} icon`}
            width={320}
            height={320}
            className='w-32 h-32 md:w-42 md:h-42 flex-shrink-0'
          />
        </div>
      </div>
    </div>
  )
}

export default ValueCard

