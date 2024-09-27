import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <main className='h-screen w-auto relative bg-white overflow-hidden'>
  <div className='absolute left-[25%] top-[-25%] transform scale-[2.5]'>
    {/* <Image
      className='animate-spin-slow'
      src='/shapes/vector 5 1.png'
      alt=''
      height={2000}
      width={2000}
    /> */}
  </div>
  <div className='h-full w-full flex items-center justify-center flex-col gap-10'>
    <div className='text-black font-title font-extrabold text-4xl'style={{fontFamily :'MyFont'}}>Who We Are</div>
    <div className='text-black  w-2/4 z-10 font-raj text-3xl'>Rupture Labs is an indie gaming studio specializing in Web3 game development. Our passionate team of developers are committed to create an advanced yet entertaining skill based game with an immersive gaming experience across multiple platforms <br/>
    (PC, WebGL , Telegram mini games and Android) and a wide genre of games.</div>
    <div>
    <Image
      className=''
      src='/shapes/lines.png'
      alt=''
      height={17}
      width={783}
    />
    </div>
    <div className='fill-red-400'>
    <svg  width="91" height="38" viewBox="0 0 91 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M88.9371 27.4159C89.2451 28.4169 89.3221 29.5719 89.0911 30.8039C88.5521 33.4219 86.3961 35.5779 83.7011 36.0399C81.0831 36.5019 78.6961 35.5009 77.2331 33.6529C75.6931 31.8819 73.5371 30.8809 71.2271 30.8809H13.7081C6.93213 30.8809 1.08013 25.5679 1.00313 18.7919C0.849132 11.8619 6.39313 6.24088 13.3231 6.24088H51.5151C53.0551 6.24088 54.5181 7.39588 54.6721 9.01288C54.9031 10.8609 53.4401 12.4009 51.6691 12.4009C45.8941 13.2479 40.4271 15.2499 35.4991 18.2529L33.8821 19.2539C31.2641 20.7939 32.3421 24.7979 35.4221 24.7979H62.2181C65.2211 24.7979 66.9921 21.4099 65.2211 18.9459C62.9111 15.8659 60.5241 12.0929 62.6031 7.31888C64.1431 3.93088 67.2231 1.46688 70.9191 1.08188C75.8471 0.465879 80.1591 3.39188 81.7761 7.62688L88.9371 27.4159Z" fill="white" stroke="black" stroke-width="2"/>
</svg>

    </div>
  </div>
</main>


  )
}

export default page