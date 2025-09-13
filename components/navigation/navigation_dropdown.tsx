import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

type NavigationItem = {
  name: string;
  href: string;
}

interface NavigationDropdownProps {
  name: string;
  items: NavigationItem[];
  className?: string;
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ 
  name, 
  items, 
  className 
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className={cn(
          "text-md font-normal text-white  transition-colors focus:outline-none ",
          className
        )}
      >
        {name}
        <ChevronDown className="inline lg:h-8 lg:w-8 w-4 h-4 mr-[-1rem]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="border-none shadow-none bg-red-100 p-20 pt-2 min-w-[8rem] w-fit mt-8"
        align="start"
        sideOffset={8}
      >
        {items.map((item) => (
          <DropdownMenuItem 
            key={item.name} 
            className="hover:bg-transparent focus:bg-transparent cursor-pointer font-satoshi px-0"
            asChild
          >
            <Link
              href={item.href}
              className="text-3xl text-white hover:text-gray-900 hover:underline py-1"
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavigationDropdown
