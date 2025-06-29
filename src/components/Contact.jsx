import React from 'react'

const Contact = () => {
  return (
  <>
  <div className='flex flex-col md:flex-row justify-center items-center mb-4 border-2 bg-[#7091E6] rounded-lg gap-6 mx-8 '>
    <div className='w-1/2  flex flex-col justify-center items-center pt-4'>
    <img className='h-[200px] w-[200px] rounded-full border-2' src='/banner.png'/>
    <div className='my-4 text-2xl text-black font-bold md:leading-snug leading-snug '>
     Dr. Serena Blake, PsyD (Clinical Psychologist)
    </div>
    <div className='my-1 text-black font-bold md:leading-snug leading-snug ' >
Experience: 8 years of practice, 500+ sessions
    </div>
     <div className='my-1 text-black font-bold md:leading-snug leading-snug underline ' >
Email: serena@blakepsychology.com
    </div>
       <div className='my-1 text-black font-bold md:leading-snug leading-snug ' >
Phone: (323) 555-0192
    </div>
    </div>
  <div className="w-full h-px bg-black mx-2 md:w-px md:h-128" />

    <div className='pt-4  flex flex-col justify-center items-center  w-1/2'>
    <h1 className='text-3xl text-black font-bold md:leading-snug leading-snug '>Get in Touch With Your Doctor</h1>
      <div className='justify-center  items-center'>
      <form className="mx-auto p-6  rounded-lg shadow-lg">
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
   <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="phone">Phone</label>
    <input
      id="Phone"
      type="Phone"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
   <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="email">Message</label>
    <textarea
      id="message"
      type="message"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
     <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="method">Method of Treatment</label>
    <input
      id="method"
      type="method"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
     <div className="mb-4">
    <label className="block text-sm font-semibold mb-1" htmlFor="time">Time</label>
    <input
      id="Time"
      type="Time"
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
  <div className='flex justify-center items-center'>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Submit
  </button>
  </div>

</form>

      </div>
    </div>
  </div>
 
  </>
  )
}

export default Contact