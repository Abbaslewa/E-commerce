import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col gap-8 md:gap-0 items-center md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-lg'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
        <Link href="/" className="flex items-center ">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={36} 
          height={36} 
        />
        <p className='text-md hidden md:block font-medium tracking-wider text-white'>TREANDLAM</p>
      </Link>
      <p className="text-sm text-gray-400">© 2025 Treandlama</p>
        <p className="text-sm text-gray-400">All rights reserved</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-sm  md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/" className='text-gray-400 hover:text-white'>HomePage</Link>
            <Link href="/about" className='text-gray-400 hover:text-white'>Tearm of service</Link>
            <Link href="/contact" className='text-gray-400 hover:text-white'>Contact</Link>
            <Link href="/privacy" className='text-gray-400 hover:text-white'>Privacy Policy</Link>
        </div>
        <div className='flex flex-col items-center gap-4 text-sm  md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/" className='text-gray-400 hover:text-white'>All Products</Link>
            <Link href="/about" className='text-gray-400 hover:text-white'>New Arrivals</Link>
            <Link href="/contact" className='text-gray-400 hover:text-white'>Contact</Link>
            <Link href="/privacy" className='text-gray-400 hover:text-white'>Best Salars</Link>
            <Link href="/privacy" className='text-gray-400 hover:text-white'>Sale</Link>
        </div>
        <div className='flex flex-col items-center gap-4 text-sm  md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/" className='text-gray-400 hover:text-white'>About</Link>
            <Link href="/about" className='text-gray-400 hover:text-white'>Contact</Link>
            <Link href="/contact" className='text-gray-400 hover:text-white'>Contact</Link>
            <Link href="/privacy" className='text-gray-400 hover:text-white'>Affiliate</Link>
                        <Link href="/privacy" className='text-gray-400 hover:text-white'>All Progaram</Link>

        </div>
    </div>
  )
}

export default Footer
