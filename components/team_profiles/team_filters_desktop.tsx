'use client'

import React from 'react'
import TeamSearch from './team_search'

interface TeamFiltersDesktopProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const TeamFiltersDesktop = ({
  categories,
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery
}: TeamFiltersDesktopProps) => {
  return (
    <div className='hidden lg:flex w-[80%] sm:w-[90%] lg:w-[90svw] px-[2svw] sm:px-[2svw] lg:px-[4svw] justify-between'>
      <div className='py-2 mb-6'>
        <h2 className='font-bold font-satoshi text-3xl text-white'>Team</h2>
      </div>
      <div className='flex gap-10'>
        {/* Category Filters */}
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mb-6'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-medium transition-colors hover:text-green-600 pb-1 ${
                activeFilter === category 
                  ? "border-b-2 border-green-500 text-green-600" 
                  : "border-b-2 border-transparent text-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <TeamSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          className='mb-6'
        />
      </div>
    </div>
  )
}

export default TeamFiltersDesktop
