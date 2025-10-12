'use client'
import React from 'react'
import { MaskText } from '../inlinemask/inline-mask'
import { startupWeekCompanies } from '@/lib/consts'
import LogoSlider from '../ui/logo-slider'

const History = () => {
  return (
    <section id='history' className=' pt-10'>
        <MaskText
          style='text-white text-2xl lg:text-4xl font-extrabold italic px-[5vw]'
          phrases={["Building NYU's CS Talent since 2010"]} />

        <div className='px-[5vw] text-white text-lg md:text-xl lg:text-2xl mt-6 w-full space-y-4'>
          <p>Founded in 2010, Tech@nyu has been the cornerstone for computer science enthusiasts at NYU.</p>
          <p>From our humble beginnings as a student-led initiative, we&apos;ve grown into a vibrant community that fosters innovation, collaboration, and learning. Over the years, we&apos;ve hosted numerous hackathons, workshops, and speaker events, connecting students with industry leaders and providing them with the skills and opportunities to excel in the tech world. Our commitment to nurturing talent and promoting diversity in tech remains unwavering as we continue to evolve and expand our reach within the NYU community. Currently, we offer bimonthly events, workshops, and application based programs to help students grow their skills and connect with like-minded peers.</p>
        </div>
        <h2 className='px-[5vw] text-4xl py-10 font-bold'>Who we&apos;ve worked with</h2>
        <LogoSlider
            logos={startupWeekCompanies}
            speed={40}
            className="mb-8"
          />
    </section>
  )
}

export default History