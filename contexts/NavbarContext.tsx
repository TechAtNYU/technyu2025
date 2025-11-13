'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface NavbarContextType {
  navbarActive: boolean
  setNavbarActive: (active: boolean) => void
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined)

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [navbarActive, setNavbarActive] = useState(true)

  return (
    <NavbarContext.Provider value={{ navbarActive, setNavbarActive }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  const context = useContext(NavbarContext)
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}
