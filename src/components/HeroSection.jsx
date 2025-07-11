"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <>
   <div className="relative hidden md:block">
        <Image 
          src="/ban.jpg"
          alt="Banner"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
        <Link href="/book-appointment">
        <button className="absolute bottom-24 cursor-pointer left-1/2 transform -translate-x-[40%] -translate-y-1/2 bg-blue-600 text-black text-xl font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
        </button></Link>
      </div>
    <Image 
  src="/ban.jpg"
  alt="Banner"
  width={1200}
  height={600}
  className="w-full pt-20 h-auto object-cover block md:hidden"
/>
  </>
  )
}

export default HeroSection