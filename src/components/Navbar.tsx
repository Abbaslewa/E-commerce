import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SreachBar'
import { Bell, Home,  ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pd-4'>
      <Link href="/" className="flex items-center ">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={36} 
          height={36} 
          className='w-6 h-6 md:h-9 md:w-9'
        />
        <p className='text-md hidden md:block font-medium tracking-wider'>TREANDLAM</p>
      </Link>
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href="/" className="">
        <Home  className='h-4 w-4 text-gray-500'/>
        </Link>
        <Bell className='h-4 w-4 text-gray-500' />
        <ShoppingCart className='h-4 w-4 text-gray-500' />
        <Link href="login">Sign in</Link>
      </div>
    </nav>
  )
}

export default Navbar
