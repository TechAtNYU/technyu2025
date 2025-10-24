'use client'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import React from 'react'
import Image from 'next/image'
import { ApplicationStatus } from '@/components/ui/ApplicationStatus'
import { mentorshipFAQ } from '@/lib/consts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Page = () => {
  return (
      <div className='min-h-screen pt-[6rem] md:pt-[12rem]'>
        <section id='about-sw' className='flex flex-col-reverse md:flex-row md:justify-between px-[5vw]'>
                <div className='lg:max-w-[60vw]'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Mentorship</h1>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Looking for help in getting better as a developer? Look no further than Tech@NYU&apos;s Mentorship Program!
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Each pairing is unique. Your goals, your time, matched to an industry expert who suits your needs.
                  </p>
                  <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                    Whether its building a startup, learning to ace leetcode interviews, building projects, its up to you and your effort.
                  </p>

                  <ApplicationStatus isOpen={false} color="red" className='md:w-[16rem]'/>
                  </div>
                  <Image
                    src={`/program-logos/mentorship.svg`}
                    alt={`Mentorship`}
                    width={200}
                    height={200}
                    className='object-contain w-full h-full lg:max-w-[30vw]'
                  />
              </section>
        <section id='process' className='mt-16'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4 md:mb-8 px-[5vw] underline underline-offset-10'>
            Mentorship Process
          </h2>
          <StickyScroll
          
          content={[{
            title: "Apply",
            description: "Help us understand your experiences, your background, and what you hope an industry mentor can help in your journey. From there you'll interview with our mentorship leads to determine a fit to a mentor. We'll then match you with a mentor based on your goals and interests.",
            content: <Image src="/event-pics/mentorship1.jpg" alt="buildathon" fill className='object-contain w-full h-full' />
          }, {
            title: "Kickoff",
            description: "Now that you're matched, it's time to meet your mentor! In this initial meeting, you'll get to know each other, discuss your goals, and set expectations for the mentorship journey ahead. Coordinate your meetings, and set a regular cadence that works for both of you.",
            content: <Image src="/event-pics/mentorship2.jpg" alt="keynote" fill className='object-contain w-full h-full' />
          },
          {
            title: "Working Together",
            description: "The heart of the mentorship program. Work with your mentor to set goals, seek advice, and get feedback on your projects. Whether it's technical skills, career guidance, or personal development, your mentor is there to support you.",
            content: <Image src="/event-pics/mentorship3.jpg" alt="panel" fill className='object-contain w-full h-full' />
          }, 
          {
            title: "Celebrate!",
            description: "We wrap up the program with a celebration event where you can share your experiences, network with other mentees and mentors, and reflect on your growth. It's a time to celebrate your achievements and the connections you've made.",
            content: <Image src="/event-pics/mentorship4.jpg" alt="workshop" fill className='object-contain w-full h-full' />
          }
        
        ]}
          />
        </section>
        <section id='Apply' className='mt-16 px-[5vw]'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8'>Ready to Apply?</h2>
          <p className='text-white text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl'>
            Applications for the Fall 2025 Mentorship Program are now closed. Stay tuned for updates on the Spring 2025 application period! In the mean time send questions you have to <a href="mailto:hello@techatnyu.org" className='hover:underline font-bold text-green-500'>hello@techatnyu.org</a>
          </p>
          <ApplicationStatus isOpen={false} color="red" className='w-[40vw]' />
        </section>
        <section id='faq' className='mt-16 px-[5vw] pb-20'>
          <h2 className='text-white text-2xl md:text-4xl lg:text-4xl font-bold text-left mb-8 underline underline-offset-15'>
            Frequently Asked Questions
          </h2>
          
          <div className='max-w-4xl'>
            <Accordion type="single" collapsible className="w-full">
              {mentorshipFAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                  <AccordionTrigger className="text-white text-lg md:text-xl font-semibold hover:text-slate-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        
        
    </div>
  )
}

export default Page