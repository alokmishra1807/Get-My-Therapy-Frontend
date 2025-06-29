"use client"


import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
    <Image 
  src="/ban.jpg"
  alt="Banner"
  width={1200}
  height={600}
  className="w-full h-auto object-cover hidden md:block"
/>
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