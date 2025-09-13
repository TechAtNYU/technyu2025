'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import TeamSearch from './team_search'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface TeamFiltersMobileProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const TeamFiltersMobile = ({
  categories,
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery
}: TeamFiltersMobileProps) => {
  const handleFilterSelect = (category: string) => {
    setActiveFilter(category)
  }

  return (
    <div className='lg:hidden w-[90%] px-4 mb-8'>
      {/* Header with Title and Filter Button */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='font-bold font-satoshi text-2xl sm:text-3xl text-white'>Team</h2>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className='flex items-center gap-2'>
              <Menu size={16} />
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filter Team Members</SheetTitle>
              <SheetDescription>
                Choose a category to filter team members
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Categories</h4>
                <div className="grid gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeFilter === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleFilterSelect(category)}
                      className="justify-start"
                    >
                      {category}
                      {activeFilter === category && (
                        <span className="ml-auto">✓</span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Search Bar - Always Visible */}
      <TeamSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        className='mb-4'
      />

      {/* Active Filter Indicator */}
      {activeFilter !== 'All' && (
        <div className='flex items-center gap-2 mb-4'>
          <span className='text-sm text-muted-foreground'>Active filter:</span>
          <Badge variant="secondary" className="flex items-center gap-1">
            {activeFilter}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveFilter('All')}
              className="h-4 w-4 p-0 hover:bg-transparent"
            >
              <X size={12} />
            </Button>
          </Badge>
        </div>
      )}
    </div>
  )
}

export default TeamFiltersMobile
