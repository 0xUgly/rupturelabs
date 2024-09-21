import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <main className='h-screen w-auto relative bg-white overflow-hidden'>
  <div className='absolute left-[25%] top-[-25%] transform scale-[2.5]'>
    <Image
      className='animate-spin-slow'
      src='/shapes/vector 5 1.png'
      alt=''
      height={2000}
      width={2000}
    />
  </div>
</main>


  )
}

export default page