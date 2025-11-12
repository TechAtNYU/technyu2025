'use client'
import React from 'react'
import AboutSection from '@/components/sections/tech-treks/about-section'
import RolesSelection from '@/components/sections/tech-treks/roles-selection'
import FAQSection from '@/components/sections/tech-treks/faq-section'

const Page = () => {
  // Toggle this to control application status
  const applicationsOpen = false;

  return (
    <div className='min-h-screen pt-[20svh] px-[5vw]'>
      <AboutSection />
      <RolesSelection applicationsOpen={applicationsOpen} />
      {/* <section id='some photos'>
        <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12'>Some Photos</h2>
        <div className='relative w-full overflow-hidden'>
          <ParallaxScrollGallery images={techTreksGalleryImages} />
        </div>
      </section> */}
      <FAQSection />
    </div>
  )
}

export default Page
