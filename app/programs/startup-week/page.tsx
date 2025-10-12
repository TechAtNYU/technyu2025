import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import React from 'react'
import Image from 'next/image'
import { ApplicationStatus } from '@/components/ui/ApplicationStatus'
import LogoSlider from '@/components/ui/logo-slider'
import { startupWeekCompanies } from '@/lib/consts'
import StartupWeekRoles from '@/components/sections/startup-week-roles'
const Page = () => {
  return (
      <div className='min-h-screen pt-[12rem]'>
        <section id='about-sw' className='flex flex-col-reverse md:flex-row md:justify-between px-[5vw]'>
                <div className='lg:max-w-[60vw]'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Startup Week</h1>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Join the committee that helps host, Startup Week! Startup Week is NYU&apos;s premier student run week-long event <b className='text-green-500'>held in the spring</b> that brings together students, entrepreneurs, and industry professionals to celebrate innovation and entrepreneurship. The event features a variety of activities, including workshops, panel discussions, networking events, and a 48-hour hackathon.
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Whether you&apos;re a seasoned entrepreneur or just starting out, Startup Week has something for everyone. Join us to learn new skills, connect with like-minded individuals, and get inspired to turn your ideas into reality!
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Startup Week is open to all NYU students, regardless of their major or level of experience. We encourage students from all backgrounds to participate and contribute to the vibrant entrepreneurial community at NYU.
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl pb-10'>
                    Feel free to checkout the Startup Week website what we had for the 2025 version at <a href="https://www.nyustartupweek.org" className='text-blue-500 hover:text-blue-400 transition-colors'>www.nyustartupweek.org</a>
                  </p>
                  <ApplicationStatus isOpen={false} color="red" className='md:w-[16rem]'/>
                  </div>
                  <Image
                    src={`/program-logos/startup-week.svg`}
                    alt={`Startup Week`}
                    width={200}
                    height={200}
                    className='object-contain w-full h-full lg:max-w-[30vw]'
                  />
              </section>
        <section id='previous-companies' className='mt-16 '>
          <div className='px-[5vw]'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8'>Previous Partners</h2>
          <p className='text-white text-lg md:text-xl mb-8 max-w-3xl'>
            We&apos;ve been proud to partner with industry-leading companies and organizations that share our vision for innovation and entrepreneurship.
          </p>
          </div>
          <LogoSlider 
            logos={startupWeekCompanies} 
            speed={40}
            className="mb-8"
          />
        </section>
        <section id='the-week' className='mt-16'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4 md:mb-8 px-[5vw] underline underline-offset-10'>Startup Week Structure</h2>
          <StickyScroll
          
          content={[{
            title: "Buildathon (A 48hr Hiring Hackathon)",
            description: "Join us for a thrilling 48-hour hackathon where you'll team up with fellow innovators to create groundbreaking solutions. Whether you're a coder, designer, or business strategist, this is your chance to shine and potentially get hired by top startups!",
            content: <Image src="/event-pics/buildathon.jpg" alt="buildathon" fill className='object-contain w-full h-full' />
          }, {
            title: "Keynote",
            description: "Hear from the top minds in the NYC ecosystem, featuring previous 30u30, unicorn founders, and more!",
            content: <Image src="/event-pics/keynote.jpg" alt="keynote" fill className='object-contain w-full h-full' />
          },
          {
            title: "Panel",
            description: "Throughout the week, you'll learn from industry experts and thought leaders as they share insights and experiences on various topics. We've had YC, ZFellows, Sequoia, and various other voices be represented in our panel series!",
            content: <Image src="/event-pics/panel.jpg" alt="panel" fill className='object-contain w-full h-full' />
          }, 
          {
            title: "Workshops",
            description: "Also participate in various hands-on workshops led by industry professionals and experienced entrepreneurs. These sessions are designed to equip you with practical skills and knowledge to help you succeed in your entrepreneurial journey. Prev Feat, Notion, Figma, Adobe, Vercel, and more!",
            content: <Image src="/event-pics/workshop.jpg" alt="workshop" fill className='object-contain w-full h-full' />
          }
        
        ]}
          />
        </section>
        
        <StartupWeekRoles />
        
    </div>
  )
}

export default Page