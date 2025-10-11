'use client'

import React from 'react'
import { Search, X } from 'lucide-react'

interface TeamSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  className?: string
  placeholder?: string
}

const TeamSearch = ({
  searchQuery,
  setSearchQuery,
  className = '',
  placeholder = 'Search'
}: TeamSearchProps) => {
  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <Search className='h-5 w-5 text-gray-400' />
      </div>
      <input
        type='text'
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-white bg-transparent'
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors'
          aria-label='Clear search'
        >
          <X className='h-6 w-6' />
        </button>
      )}
    </div>
  )
}

export default TeamSearch
