'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// When the time comes to build the program pages
import NavigationDropdown from './navigation_dropdown'
import { programs } from '@/lib/consts'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './style.module.css';
import NavbarMobile from './navbar-mobile'

const Navbar = () => {
  const pathname = usePathname()
  const isRootRoute = pathname === '/'
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div 
      className='fixed w-full z-[30]'
      initial={{ opacity: isRootRoute ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.75, ease:[0.65, 0, 0.35, 1] }}
      
    >
        <div className='flex w-full justify-center relative font-bold p-[10px] pb-0 box-border z-[50]'>
            <div className='outline outline-white rounded-xl lg:rounded-3xl w-[90%] md:w-[85svw] lg:w-[95svw] h-16 md:min-h-24 p-5 px-10 text-lg bg-black mt-2 md:mt-10 flex'>
                <div className='w-full h-full flex justify-between items-center'>
                    <Link href="/">
                        <Image src="/logo.svg" alt="tech@nyu logo" width={200} height={50} className='object-contain w-[120px] h-[30px] md:w-[200px] md:h-[50px] mt-1'/>
                    </Link>
                    <div className='gap-5 md:gap-10 text-xl lg:text-2xl hidden md:flex text-center'>
                        <Link href="/team" className='text-white hover:underline '>Team</Link>
                        <Link href="/about" className='text-white hover:underline'>About</Link>
                        <NavigationDropdown name="Programs" items={programs.map(prog => ({ name: prog.name, href: prog.href }))} />
                        {/* For future patch */}
                        <Link href="mailto:hello@techatnyu.org" className='text-white hover:underline'>Contact</Link>
                    </div>
                    <div className='md:hidden flex items-center justify-center gap-2 text-white text-sm' onClick={() => setIsActive(!isActive)}>
                        <div className={`${styles.label} cursor-pointer`}>
                            <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                        </div>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}/>
                    </div>
                </div>
            </div>
        </div>
        <AnimatePresence mode='wait'>
            {isActive && (
                <>
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed md:hidden inset-0 z-[0] backdrop-blur-lg bg-black/30"
                    />
                    <NavbarMobile setIsActive={setIsActive}/>
                </>
            )}
        </AnimatePresence>
    </motion.div>
  )
}

const opacity = {
    initial: {
        opacity: 0
    },

    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },

    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export default Navbar
