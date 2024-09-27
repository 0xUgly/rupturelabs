import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const coderscrux = localFont({
  src: "../fonts/CodersCrux.ttf",
  variable: "--font-coder",
  weight: "100 900",
});
function page() {
  return (
    <main className={`h-screen w-full bg-[#0000AA] text-black`}>
      <div className='w-full  flex justify-center'>
      <Image
      className=''
      src='/shapes/RLpng.png'
      alt=''
      height={468}
      width={767}
    />
      </div>
      <div className={`${coderscrux.variable} font-coder w-full flex justify-center `}>
        <div className=' flex justify-between w-3/4 items-center'>
          <div>Rupture Labs</div>
          <div>©️2024</div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col font-coder'>
        <div>OUR WEBSITE IS UNDER CONSTRUCTION</div>
        <div>STAY TUNED AND CHECK BACK SOON</div>
        <div>+--------------------------------+</div>
        <div>: COMING SOON :</div>
        <div>+--------------------------------+</div>
      </div>
    </main>
    
  )
}

export default page