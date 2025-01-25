"use client"
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { ImageMarqueeDemo } from '@/components/mark'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
import Component from '@/components/scrollable'
 function About() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    // Clean up function
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    }
  }, []);
  return (
    <main className='h-auto lg:p-0 p-3 w-auto relative bg-black overflow-hidden'>
  <div className='absolute left-[25%] top-[-25%] transform scale-[2.5]'>
    {/* <Image
      className='animate-spin-slow'
      src='/shapes/vector 5 1.png'
      alt=''
      height={2000}
      width={2000}
    /> */}
  </div>
  <div className='relative h-screen w-full bg-black  flex  items-center justify-center'>
  <motion.div 
    initial={{ x: 0, rotate: 0, scale:1 }}
    transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}>
  <Image 
  src="/bg/home.png"
  alt=""
  width={900}  // Original width
  height={900} // Original height
  
/>
  </motion.div>
  <div className='absolute bottom-24 z-20'>
  <Image 
  src="/bg/scroll.png"
  alt=""
  width={220}  // Original width
  height={69} // Original height
  
/>
  </div>
  </div>
  <div className='flex flex-col items-center justify-center h-screen w-full gap-16'>
    <motion.div  >
    <Image
      className='lg:w-[300px] w-[200px]'
      src='/shapes/PLAY.png'
      alt=''
      height={300}
      width={300}
      />
    </motion.div>
  <div className='lg:flex lg:flex-row lg:items-center lg:justify-center  flex flex-col items-center justify-center w-full gap-10 '>
    <div className='text-white   lg:h-[400px] h-[] font-babes  lg:w-auto font-bold text-4xl lg:flex lg:flex-col lg:justify-between  flex justify-between w-full items-between lg:items-end'>
     <motion.div className='lg:inline-block transform  lg:text-[150px]  text-[70px]'>WHO</motion.div>
     <motion.div className='lg:inline-block transform  lg:text-[150px] text-[70px]'>WE</motion.div>
     <motion.div className='lg:inline-block transform  lg:text-[150px] text-[70px]'>ARE</motion.div>
    </div>
    <motion.div  className=' lg:flex-col lg:w-1/5 lg:text-[1.4vw] font-medium text-white font-raj'>
    Rupture Labs is an indie gaming studio specializing in  <span className="text-[#51FF85]">Web3</span> game development. Our passionate team of developers are committed to create an advanced yet entertaining skill based game with an immersive gaming experience across multiple platforms<br/>
    (<span className="text-[#51FF85]">PC, WebGL , Telegram mini games and Android</span>) and a wide genre of games.
    </motion.div>

  </div>
  <div>
  <Image
      className=''
      src='/shapes/lines.png'
      alt=''
      height={500}
      width={500}
      />
  </div>
  </div>
  
  <div  className='h-screen bg-black lg:flex lg:flex-row flex flex-col lg:gap-0 gap-3 items-center justify-center'>
      <motion.div className='bg-black lg:flex-[1.7] flex items-center justify-center'>
        <motion.div >
        <Image
        className='lg:h-[60vh] h-2/4'
        src='/shapes/BG12.png'
        alt=''
        width={3000}
        height={3000}
        />
        </motion.div>
      </motion.div>
      <div className='bg-black flex-1 flex flex-col items-center justify-center lg:p-4'>
        <motion.div  className=' w-full lg:flex lg:flex-row flex flex-col lg:justify-start items-center text-white lg:text-8xl text-4xl font-babes '>BUILDING THE<br/> FUTURE OF<br/> GAMING</motion.div>
        <motion.div   className=' w-full font-medium text-white flex lg:text-[26px] text-[20px] font-raj items-center p-2'>At Rupture Labs, we are building the future next generation web3 gaming ecosystem experience with EVM Warfare & fun to play Telegram-based games catering both competitive gamers and casual web3 audience. With a goal to eliminate traditional web3 gaming barriers through account abstraction and gasless transactions, making blockchain gaming accessible on multiple platforms.</motion.div>
      </div>
  </div>

  <div className='h-screen w-full z-30 bg-black'>
      < ImageMarqueeDemo />
  </div>
  <div className='h-screen text-white font-babes z-10 relative'>

        <div className="relative w-full min-h-screen overflow-hidden px-4 py-8 lg:p-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ opacity: { duration: 1.5 }, ease: "easeOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=""
      >
        <h1 className="text-5xl lg:text-[105px] z-10  leading-tight font-babes">OUR PARTNER</h1>
      </motion.div>
      <div className="">
        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-10">
        <motion.div
            
            className="relative h-36 w-full lg:h-[230px] lg:w-[200px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
          >
             <Image 
              src="/partners/taiko.png" 
              alt="Taiko Logo" 
              layout="intrinsic" 
              width={150} 
              height={138} 
              className="rounded-md "
            />
            <div className="absolute bottom-0 w-full bg-white text-black p-2 text-center">
              Taiko
            </div>
          </motion.div>

          <motion.div
            
            className="relative h-36 w-full lg:h-[230px] lg:w-[200px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            
            <Image 
              src="/partners/Vector.png" 
              alt="Taiko Logo" 
              layout="intrinsic" 
              width={166} 
              height={104} 
              className="rounded-md"
            />           
            <div className="absolute bottom-0 w-full bg-white text-black p-2 text-center">
              Third-web
            </div>
          </motion.div>

          <motion.div
           
            className="relative h-36 w-full lg:h-[230px] lg:w-[200px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            <Image 
            
              src="/partners/zkcandy2.png" 
              alt="Taiko Logo" 
              layout="intrinsic" 
              width={163} 
              height={155} 
              className="rounded-xl bg-white"
            />
            <div className="absolute bottom-0 w-full bg-white text-black p-2 text-center">
              Binance
            </div>
          </motion.div>

          <motion.div
           
            className="relative h-36 w-full lg:h-[230px] lg:w-[200px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            <Image 
              src="/partners/zkcandy1.png" 
              alt="Taiko Logo" 
              layout="intrinsic" 
              width={151} 
              height={101} 
              className="rounded-md bg-black p-4"
            />
            <div className="absolute bottom-0 w-full bg-white text-black p-2 text-center">
              ZK Candy
            </div>
          </motion.div>
        </div>
      </div>
    <div className='mt-4 p-4 font-raj'>We collaborate with top-tier partners to push the boundaries of Web3 gaming. From blockchain innovators to gaming pioneers, our partners help us build immersive experiences powered by cutting-edge technology.</div>
    </div>
  </div>
<div className='h-auto w-auto relative bg-white overflow-hidden'>
  <Component/>
  </div>
  <div className='h-screen flex flex-col items-center justify-center w-full bg-black'>
      <div className='font-babes lg:text-[145px]  text-[105px] pt-24'>STILL BUILDING!</div>
      <div className='absolute z-10 bottom-0 pb-24 flex flex-col items-center justify-center'>
        <div>
          <Image
            src='/logo/implinks.png'
            alt=''
            height={80}
            width={80}
            />
        </div>
        <div className='font-raj'>Important Links</div>
        <div className='flex gap-2 text-sm'>
          <div>home</div>
          <div>about us</div>
          <div>contact</div>
          <div>legal</div>
        </div>
      </div>
  </div>
</main>


  )
}
export default About;