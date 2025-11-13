'use client'

import React, { useState, useMemo, useRef } from 'react'
import ProfileCard from './profile_card'
import { TeamMember } from '@/lib/types'
import TeamFiltersDesktop from './team_filters_desktop'
import TeamFiltersMobile from './team_filters_mobile'
import { gsap } from 'gsap'
import { useNavbar } from '@/contexts/NavbarContext'
import { motion } from 'framer-motion'

interface TeamGridProps {
  initialTeamMembers: TeamMember[]
}

const TeamGrid = ({ initialTeamMembers }: TeamGridProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [displayedFilter, setDisplayedFilter] = useState("All")
  const gridRef = useRef<HTMLDivElement>(null)
  const { navbarActive } = useNavbar()

  // Extract unique categories from team members
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(initialTeamMembers.map(member => member.category))]
    return ["All", ...uniqueCategories]
  }, [initialTeamMembers])

  // Custom filter handler to trigger animation
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === displayedFilter) return // No change needed
    
    const grid = gridRef.current
    if (!grid) {
      setActiveFilter(newFilter)
      setDisplayedFilter(newFilter)
      return
    }
    
    const timeline = gsap.timeline()
    
    // Step 1: Fade out current grid
    timeline.to(grid, { 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.inOut",
      onComplete: () => {
        // Step 2: Update the filter while hidden
        setDisplayedFilter(newFilter)
        setActiveFilter(newFilter)
      }
    })
    // Step 3: Fade in new filtered results
    .to(grid, { 
      opacity: 1, 
      duration: 0.3, 
      ease: "power2.inOut",
      // onComplete: () => {
      //   setIsAnimating(false)
      // }
    })
  }

  // Filter team members based on search and category
  const filteredTeam = useMemo(() => {
    let filtered = initialTeamMembers

    // Apply category filter (use displayedFilter during animation)
    if (displayedFilter !== "All") {
      filtered = filtered.filter((member: TeamMember) => member.category === displayedFilter)
    }

    // Apply search filter (search through name and title) - instant, no animation
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter((member: TeamMember) => 
        member.name.toLowerCase().includes(query) ||
        member.title.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [initialTeamMembers, searchQuery, displayedFilter])

  return (
    <div className='w-[100svw] h-fit flex flex-col items-center justify-center pb-[20svh]'>
      {/* Sticky Filter Section */}
      <motion.div 
        className='sticky top-0 z-20 w-[100svw] flex justify-center border-b-2 border-white bg-black/95 backdrop-blur-sm'
        initial={{
          paddingTop: navbarActive ? 'var(--navbar-active-pt)' : '1.25rem'
        }}
        animate={{
          paddingTop: navbarActive ? 'var(--navbar-active-pt)' : '1.25rem'
        }}
        transition={{
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{
          '--navbar-active-pt': 'clamp(6rem, 20svh, 10rem)'
        } as React.CSSProperties}
      >
        {/* Desktop Filter Section */}
        <TeamFiltersDesktop
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Mobile Filter Section */}
        <TeamFiltersMobile
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </motion.div>

      {/* Team Grid */}
      <div 
        ref={gridRef}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-10 w-[80%] sm:w-[90%] lg:w-[90%] xl:w-fit px-[2svw] sm:px-[2svw] lg:px-[4svw] pt-6 lg:pt-20'
      >
        {filteredTeam.length > 0 ? (
          filteredTeam.map((member: TeamMember, index: number) => (
            <div key={member.slug} className="min-h-[400px] sm:min-h-0">
              <ProfileCard member={member} priority={index < 9} />
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-20">
            <p className="text-white text-lg">No team members found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamGrid
