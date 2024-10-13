import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';

// Declare the font
const codersCrux = localFont({ 
  src: '../fonts/CodersCrux.ttf',
  variable: '--font-coders-crux'
});
console.log('yes');
console.log('CodersCrux font loaded:', codersCrux.className);


 function Page() {


  return (
    <main className={ ` ${codersCrux.className} ${codersCrux.variable}font-coders-crux h-screen w-full bg-black`}>
      <div className='w-full pt-24 flex items-center justify-center'>
        <Image
        src='/shapes/RLpng.png'
        alt=''
        height={500}
        width={500}
        />
      </div>
      <div className={`${codersCrux.className} text-white w-full text-center`} >
        OUR WEBSITE IS UNDER CONSTRUCTION
      </div>
    </main>
  )
}
export default Page;
