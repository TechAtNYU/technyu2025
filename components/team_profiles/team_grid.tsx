'use client'

import React, { useState, useMemo } from 'react'
import ProfileCard from './profile_card'
import { team_members } from '@/lib/consts'
import { TeamMember } from '@/lib/types'
import TeamFiltersDesktop from './team_filters_desktop'
import TeamFiltersMobile from './team_filters_mobile'

const TeamGrid = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  // Extract unique categories from team members
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(team_members.map(member => member.category))]
    return ["All", ...uniqueCategories]
  }, [])

  // Filter team members based on search and category
  const filteredTeam = useMemo(() => {
    let filtered = team_members

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(member => member.category === activeFilter)
    }

    // Apply search filter (search through name and title)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(query) ||
        member.title.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [searchQuery, activeFilter])

  return (
    <div className='w-[100svw] h-fit flex flex-col items-center pt-[2.5svh] pb-[10svh]'>
      {/* Desktop Filter Section */}
      <TeamFiltersDesktop
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Mobile Filter Section */}
      <TeamFiltersMobile
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Team Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] sm:w-[90%] lg:w-[90%] px-[2svw] sm:px-[2svw] lg:px-[4svw]'>
        {filteredTeam.length > 0 ? (
          filteredTeam.map((member: TeamMember) => (
            <ProfileCard key={member.slug} member={member} />
          ))
        ) : (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-500 text-lg'>No team members found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
              }}
              className='mt-4 text-green-600 hover:text-green-700 font-medium underline'
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamGrid
