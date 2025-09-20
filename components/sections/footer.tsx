import React from 'react'
import { programs, contacts, about } from '@/lib/consts'
import Image from 'next/image'

const Footer = () => {


  return (
    <section className='w-full bg-[#191919] min-h-48 px-5 flex flex-col text-[#FFFFFF]'>
        <div className='pt-5 w-full flex justify-between md:flex-row flex-col'>
            <div className="relative w-48 h-16 md:w-60 md:h-20">
                <Image src="/logo.svg" alt="Technyu Logo" fill style={{objectFit: 'contain'}} priority />
            </div>
            <div className='flex flex-row py-5 md:py-0 gap-2.5 text-lg'>
                <div className=' flex flex-col'>
                    <h3 className='font-bold text-lg'>About</h3>
                    {about.map((item) => (
                        <FooterAnchor key={item} name={item} />
                    ))}
                </div>
                <div className='ml-10 flex flex-col'>
                    <h3 className='font-bold text-lg'>Programs</h3>
                    {programs.map((program) => (
                        <FooterAnchor key={program} name={program} />
                    ))}
                </div>
                <div className='ml-10 flex flex-col'>
                    <h3 className='font-bold'>Contact</h3>
                    {contacts.map((contact) => (
                        <FooterAnchor key={contact} name={contact} />
                    ))}
                </div>
            </div>
        </div>
        <p>© 2023 Your Company. All rights reserved.</p>
        <div className='w-full text-gray-600 flex items-center justify-center py-4 text-sm'>
            <p>Made by Jennifer Huang and Sean Lai 2025.</p>
        </div>
    </section>
  )
}

type FooterAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    name: string;
};

const FooterAnchor: React.FC<FooterAnchorProps> = ({ name, ...rest }) => {
    return (
        <a
            href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
            className='hover:underline'
            {...rest}
        >
            {name}
        </a>
    );
}

export default Footer
