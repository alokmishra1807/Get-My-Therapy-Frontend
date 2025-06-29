import React from 'react'

const Services = () => {
  return (
<div>
    <div className='flex justify-center items-center pt-20 pb-4 md:text-4xl 3xl font-bold md:leading-snug leading-snug'>Services & Specialties</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#3D52A0]'>
<div className='flex flex-col justify-center items-center  text-center'><img src={"/stress1.jpg"} className='rounded-full h-[260px] w-[260px]' /> <div className='p-4'>
    <h3 className='font-bold md:leading-snug leading-snug text-black'>Anxiety & Stress Management</h3>
    We provide compassionate and personalized care to help you manage anxiety and reduce stress effectively. We aim to restore calm, improve coping skills, and enhance your emotional well-being.</div></div>
<div className='flex flex-col justify-center  items-center text-center'><img src={"/relation.jpg"} className='rounded-full h-[260px] w-[260px]'/><div className='p-4'>
    <h3 className='font-bold md:leading-snug leading-snug text-black'>Relationship Counseling </h3>Healthy relationships are essential to a fulfilling life. Our counseling sessions offer a safe space for couples and individuals to address communication issues, resolve conflicts, and build stronger, more meaningful connections.</div></div>
<div className='flex flex-col justify-center items-center text-center'><img src={"/trauma.jpg"} className='rounded-full  h-[260px] w-[260px]'/> <div className='p-4'>
    <h3 className='font-bold md:leading-snug leading-snug text-black'>Trauma Recovery</h3>Recovering from trauma is a deeply personal journey. We offer a supportive and non-judgmental environment where you can process past experiences, rebuild trust, and move forward with strength and resilience.</div></div>

    </div>

    <hr className="border-t border-gray-300 my-4" />

</div>
  )
}

export default Services