'use client'
import React from 'react'
import NavigationDropdown from './navigation_dropdown'
import { programs } from '@/lib/consts'
import NavbarMobile from './NavbarMobile'
import { Hamburger, HamburgerIcon, MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full absolute top-10 left-0 z-50 flex justify-center'>
      <div className='outline outline-white rounded-3xl w-[90%] md:w-[80%] h-24 flex justify-between items-center p-5 text-lg'>
        <div className='text-white text-lg font-bold'>
          Logo
        </div>
        <div className='gap-5 md:gap-10 text-xl lg:text-2xl hidden md:flex'>
          <a href="/team" className='text-white hover:underline'>Team</a>
          <a href="#" className='text-white hover:underline'>About</a>
          <NavigationDropdown name="Programs" items={programs.map(prog => ({ name: prog, href: `#${prog.toLowerCase().replace(/\s+/g, '-')}` }))} />
          <a href="#" className='text-white hover:underline'>Contact</a>
        </div>
        <div className='md:hidden'>
            <MenuIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
