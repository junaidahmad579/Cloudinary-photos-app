import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="border-b container mx-auto">
          <div className="flex h-16 items-center px-4">
            <Link href='/' 
            className='flex gap-1 font-bold'>
            <Instagram/>
            PHOTOS APP
            </Link>
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@juni.x" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
            </div>
          </div>
          </div>
        
  )
}

export default Header