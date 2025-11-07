import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import React from 'react'
import Image from 'next/image'
import { ApplicationStatus } from '@/components/ui/ApplicationStatus'
import DevTeamRoles from '@/components/sections/dev-team-roles'
const Page = () => {
  return (
      <div className='min-h-screen pt-[12rem]'>
        <section id='about-sw' className='flex flex-col-reverse md:flex-row md:justify-between px-[5vw]'>
                <div className='lg:max-w-[60vw]'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Dev Team</h1>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Join a semesterly long sprint in shippping a product from 0 to 1. Learn, adapt, and grow like a startup catering to real users!
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Whether you&apos;re a backend demon or a frontend wizard, there&apos;s a place for you on our team. If you can ship good quality code, we want you on this team!
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Started in spring 2024, this program had alumni land FAANG, Jane St, startup internships, and launch their own design agency!
                  </p>
                   <ApplicationStatus isOpen={false} color="red" className='md:w-[16rem]'/>
                  </div>
                  <Image
                    src={`/program-logos/dev-team.svg`}
                    alt={`Dev Team`}
                    width={200}
                    height={200}
                    className='object-contain w-full h-full lg:max-w-[30vw]'
                  />
              </section>
        <section id='structure' className='mt-16'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8 px-[5vw] underline underline-offset-10'>Dev Team Curriculum</h2>
          <StickyScroll
          
          content={[{
            title: "Building",
            description: "Start an intense sprint working with designers and engineers to turn mocks into an MVP. Collaborate together to acquire users and ship fast.",
            content: <Image src="./event-pics/buildathon.jpg" alt="buildathon" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="./event-pics/buildathon.jpg" alt="buildathon" fill className='object-cover rounded-lg' /></div>
          }, {
            title: "Iteration",
            description: "As you acquire users, learn how to iterate quick, respond, and add features to support a growing userbase leveraging Tech@NYU's network.",
            content: <Image src="/event-pics/devteam2.jpg" alt="keynote" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="./event-pics/devteam2.jpg" alt="keynote" fill className='object-cover rounded-lg' /></div>
          },
          {
            title: "Showcase",
            description: "Finally show off to a panel of technical founders and experts, with the repository becoming opensource for your portfolio.",
            content: <Image src="./event-pics/devteam3.jpg" alt="panel" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="./event-pics/devteam3.jpg" alt="panel" fill className='object-cover rounded-lg' /></div>
          }, 
          {
            title: "Workshops",
            description: "Internal workshops hosted by the club to help upskill. Workshops have covered RAG, MCP, Agentic Frameworks, Post training, Database sharding and optimizations, and more!",
            content: <Image src="./event-pics/panel.jpg" alt="workshop" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="./event-pics/panel.jpg" alt="workshop" fill className='object-cover rounded-lg' /></div>
          }
        
        ]}
          />
        </section>
        
        <DevTeamRoles />
        
    </div>
  )
}

export default Page