import React from 'react'

const About = () => {
  return (
       <div>
<div className='pb-4 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

<div className='md:w-1/2'>
<img src={"/banner.png"} className='pl-5'/>

</div>
<div className='md:w-1/2 space-y-7 px-4'>
<h2 className='md:text-4xl 3xl font-bold md:leading-snug leading-snug pl-13 pt-10'> About  Dr. Serena Blake</h2>
<p className="text-[#3d53A0] text-xl font-semibold pl-5 pt-5">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>


</div>




</div>
   </div>
  )
}

export default About