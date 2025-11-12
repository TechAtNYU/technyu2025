import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id='about-tt' className='flex flex-col-reverse md:flex-row md:justify-between'>
      <div className='lg:max-w-[60vw]'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Tech Treks</h1>
        <p className='text-white text-lg md:text-xl max-w-2xl'>
          Initially created to expose freshmen to the tech industry, we realized there were sophomores and juniors just as new to the industry. Tech Treks now has two participant types: members and tutors!

          Members: You will be a part of a 12-15 person semesterly cohort that meets every week on Tuesdays and Fridays. You will meet other students who are beginning their journeys in tech, connect with industry professionals, learn from workshops, and add fun software projects to your portfolio!

          Tutors: You will aid the members in building their projects by offering your expertise on Tuesdays, with optional additional office hours. In return, you will get all the perks that regular members get!
        </p>
      </div>
      <Image
        src={`/program-logos/tech-treks.svg`}
        alt={`Tech Treks`}
        width={200}
        height={200}
        className='object-contain w-full h-full lg:max-w-[30vw] md:max-w-[40%] md:max-h-[40vh]'
      />
    </section>
  )
}

export default AboutSection
