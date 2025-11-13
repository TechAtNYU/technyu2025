'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavigationDropdown from './navigation_dropdown'
import { programs } from '@/lib/consts'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './style.module.css'
import NavbarMobile from './navbar-mobile'
import Logo from '@/components/assets/logo.svg'
import { useNavbar } from '@/contexts/NavbarContext'

const Navbar = () => {
  const pathname = usePathname()
  const isRootRoute = pathname === '/'
  const [isActive, setIsActive] = useState(false)
  const { navbarActive, setNavbarActive } = useNavbar()

  // Use refs to track scroll state without causing re-renders
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<'up' | 'down' | null>(null)
  const directionChangeY = useRef(0)
  const ticking = useRef(false)
  const hasScrolledPastThreshold = useRef(false)

  useEffect(() => {
    const ACTIVE_THRESHOLD = 50 // Scroll position to activate navbar style
    const DIRECTION_COMMIT_DISTANCE = 80 // Distance needed to commit direction change
    const HIDE_THRESHOLD = 30 // Minimum scroll position to allow hiding

    const updateNavbar = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = currentScrollY - lastScrollY.current
      
      // Ignore tiny movements (reduces jitter)
      if (Math.abs(scrollDiff) < 3) {
        ticking.current = false
        return
      }

      const newDirection = scrollDiff > 0 ? 'down' : 'up'
      
      // Detect direction change
      if (newDirection !== scrollDirection.current) {
        scrollDirection.current = newDirection
        directionChangeY.current = currentScrollY
      }

      // Calculate distance traveled in current direction
      const distanceInDirection = Math.abs(currentScrollY - directionChangeY.current)

      // Handle navbar active state (once activated, stays active)
      if (currentScrollY > ACTIVE_THRESHOLD) {
        hasScrolledPastThreshold.current = true
      }
      
      if (hasScrolledPastThreshold.current && !navbarActive) {
        setNavbarActive(true)
      }

      // Update navbar visibility based on scroll direction commitment
      if (distanceInDirection >= DIRECTION_COMMIT_DISTANCE) {
        if (newDirection === 'up') {
          setNavbarActive(true)
        } else if (currentScrollY > HIDE_THRESHOLD) {
          setNavbarActive(false)
        }
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar)
        ticking.current = true
      }
    }

    // Initialize
    lastScrollY.current = window.scrollY
    
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navbarActive, setNavbarActive])

  return (
    <motion.div 
      className='fixed w-full z-[100]'
      initial={{ opacity: isRootRoute ? 0 : 1 }}
      animate={{ 
        opacity: 1,
        translateY: navbarActive ? 0 : -200
      }}
      transition={{ 
        opacity: { duration: 1.5, delay: 0.75, ease:[0.65, 0, 0.35, 1] },
        translateY: { duration: 0.7, ease: 'easeInOut' }
      }}
      data-navbar-active={navbarActive}
    >
        <div className='flex w-full justify-center relative font-bold'>
            <div className={`outline outline-white rounded-xl lg:rounded-3xl w-[90svw] md:w-[85svw] lg:w-[95svw] h-16 md:min-h-24 p-5 px-3 md:px-10 text-lg bg-black mt-2 md:mt-10 z-[100] ${navbarActive ? 'navbar-scrolled' : ''}`}>
                <div className='w-full h-full flex justify-between items-center'>
                    <Link href="/">
                        <Logo className='object-contain w-[120px] h-[30px] md:w-[200px] md:h-[50px] mt-1' aria-label="tech@nyu logo" />
                    </Link>
                    <div className='gap-5 md:gap-10 text-xl lg:text-2xl hidden md:flex text-center'>
                        <Link href="/team" className='text-white hover:underline '>Team</Link>
                        <NavigationDropdown name="Programs" items={programs.map(prog => ({ name: prog.name, href: prog.href }))} />
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