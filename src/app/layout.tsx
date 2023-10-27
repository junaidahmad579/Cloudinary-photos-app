import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloudinary Photos app',
  description: 'Cloudinary Photos app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
       <Header/>
      <div className='flex'>
       <SideMenu/>
       <div className='w-full px-4 py-2 pt-8'>{children}</div>
      </div>
      
        </body>
    </html>
  )
}
