import React from 'react'
import { programs, contacts, about } from '@/lib/consts'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='w-full bg-[#191919] px-[2.5vw] pt-8 pb-12 flex flex-col text-[#FFFFFF]'>
        <div className='w-full flex justify-between md:flex-row flex-col md:gap-0 gap-4'>
            <div className="relative w-40 h-12 md:w-60 md:h-20 flex-shrink-0">
                <Image src="/logo.svg" alt="Technyu Logo" fill style={{objectFit: 'contain'}} priority />
            </div>
            <div className='flex flex-row gap-4 md:gap-10 text-base md:text-lg overflow-hidden'>
                <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-bold text-base md:text-lg mb-1'>About</h3>
                    {about.map((item) => (
                        <FooterAnchor key={item.name} name={item.name} href={item.href} />
                    ))}
                </div>
                <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-bold text-base md:text-lg mb-1'>Programs</h3>
                    {programs.map((program) => (
                        <FooterAnchor key={program.name} name={program.name} href={program.href} />
                    ))}
                </div>
                <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-bold text-base md:text-lg mb-1'>Contact</h3>
                    {contacts.map((contact) => (
                        <FooterAnchor key={contact[0]} name={contact[0]} href={contact[1]} />
                    ))}
                </div>
            </div>
        </div>
        <div className='w-full mt-4 pt-3 flex flex-col'>
            <p className='text-xs md:text-sm text-gray-300'>© 2025 Tech@NYU. All rights reserved.</p>
            <p className='text-xs md:text-sm text-gray-400 mt-2'>Made by Jennifer Huang and Sean Lai 2025.</p>
        </div>
    </section>
  )
}

type FooterAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    name: string;
    href?: string;
};

const FooterAnchor: React.FC<FooterAnchorProps> = ({ name, href, ...rest }) => {
    return (
        <a
            href={href ? href : '#'}
            className='hover:underline text-xs md:text-base text-gray-300 hover:text-white transition-colors truncate'
            {...rest}
        >
            {name}
        </a>
    );
}

export default Footer
