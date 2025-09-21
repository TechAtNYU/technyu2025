import React from 'react'
import './style.css'
import { ValueCardProps } from '@/lib/types'
import Image from 'next/image'

const ValueCard = ({ProgramDetail, variant}: {ProgramDetail: ValueCardProps, variant: string}) => {
  const { name, url, svgicon, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''}`}>
        {/* <div className={` w-full h-full`}> */}
            <div className={`h-[10vh] ${variant === "green" ? "bg-[#32bd6a]" : "bg-[#A855F7]"} w-full flex items-center justify-start px-5`}>
                <h1>
                    {name}
                </h1>
            </div>
      <div className='flex items-center justify-center w-full h-[40vh]'>
        <p className='text-white text-[2svw] w-full h-full flex items-center justify-center text-left p-10'>{description}</p>
            </div>
    </div>
  )
}

export default ValueCard

