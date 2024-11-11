"use client"
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { MarqueeDemo } from '@/components/mark'
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
    <main className='h-auto w-auto relative bg-white overflow-hidden'>
  <div className='absolute left-[25%] top-[-25%] transform scale-[2.5]'>
    {/* <Image
      className='animate-spin-slow'
      src='/shapes/vector 5 1.png'
      alt=''
      height={2000}
      width={2000}
    /> */}
  </div>
  <div className='flex flex-col items-center justify-center h-screen w-full gap-16'>
    <motion.div  >
    <Image
      className=''
      src='/shapes/PLAY.png'
      alt=''
      height={300}
      width={300}
      />
    </motion.div>
  <div className='flex items-center justify-center w-full gap-10 '>
    <div className='text-black   h-[400px] font-babes  w-auto font-bold text-4xl flex flex-col justify-between items-end'>
     <motion.div className='inline-block transform  text-[150px] '>WHO</motion.div>
     <motion.div className='inline-block transform  text-[150px]'>WE</motion.div>
     <motion.div className='inline-block transform  text-[150px]'>ARE</motion.div>
    </div>
    <motion.div  className=' flex-col w-1/5 text-[1.4vw] font-medium text-black font-raj'>
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
  
  <div  className='h-screen bg-black flex items-center justify-center'>
      <motion.div className='bg-black flex-[1.7] flex items-center justify-center'>
        <motion.div >
        <Image
        className='h-[60vh]'
        src='/shapes/BG12.png'
        alt=''
        width={3000}
        height={3000}
        />
        </motion.div>
      </motion.div>
      <div className='bg-black flex-1 flex flex-col items-center justify-center p-4'>
        <motion.div  className=' w-full flex justify-start text-white text-8xl  font-babes items-'>BUILDING THE<br/> FUTURE OF<br/> GAMING</motion.div>
        <motion.div   className=' w-full font-medium text-white flex text-[26px] font-raj items-center p-2'>At Rupture Labs, we are building the future next generation web3 gaming ecosystem experience with EVM Warfare & fun to play Telegram-based games catering both competitive gamers and casual web3 audience. With a goal to eliminate traditional web3 gaming barriers through account abstraction and gasless transactions, making blockchain gaming accessible on multiple platforms.</motion.div>
      </div>
  </div>

  <div className='h-screen w-full bg-black'>
      < MarqueeDemo/>
  </div>
  <div className='h-screen text-black font-babes relative'>
  <div className='left-[35%] top-[-25%] transform scale-[1] absolute'>
            <Image
            className='  '
            src='/shapes/shape_03 1.png'
            alt=''
            height={379}
            width={2266}
            />
        </div>
        <div className='absolute right-5 bottom-10 rotate-180'>
            <Image
            className='  '
            src='/shapes/shapesmal.png'
            alt=''
            height={230}
            width={230}
            />
        </div>
        <div className='absolute right-[200px] bottom-10'>
            <Image
            className='  '
            src='/shapes/shapesmal.png'
            alt=''
            height={230}
            width={230}
            />
        </div>

    <div className='h-full w-wll relative'>
      <motion.div initial={{ opacity: 0, x: -100 }}   transition={{ opacity:{duration:2}, ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, x: 0 }} className='absolute text-[105px] top-24 left-24'>
      <div>OUR</div>
      <div>PARTNER</div>
      </motion.div>
      <div className=' absolute top-[140px] left-[500px]'>
        <div className='flex gap-10 '>
        <motion.div initial={{ x:100, rotate:60 , scale:1.5 }}   transition={{ opacity:{duration:2}, ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{x:0, rotate:3 , scale:1 }} className='h-[230px] w-[200px] bg-black rounded-xl'></motion.div>
        <motion.div initial={{ x:100, rotate:-30 , scale:1.5 }}   transition={{ opacity:{duration:2}, ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{x:0, rotate:-2 , scale:1 }} className='h-[230px] w-[200px] bg-black rounded-xl'></motion.div>
        <motion.div initial={{ x:100, rotate:80 , scale:1.5 }}   transition={{ opacity:{duration:2}, ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{x:0, rotate:7 , scale:1 }} className='h-[230px] w-[200px] bg-black rounded-xl'></motion.div>
        </div>
      </div>
      <div className=' absolute bottom-32 left-[400px]'>
        <div className='flex gap-10 '>
        <div className='h-[230px] w-[200px] bg-black rounded-xl'></div>
        <div className='h-[230px] w-[200px] bg-black rounded-xl'></div>
        <div className='h-[230px] w-[200px] bg-black rounded-xl'></div>
        </div>
      </div>
    </div>
  </div>

  <Component/>
  <div className='h-screen w-full bg-black'>
      <div className='font-babes text-[145px] pt-24'>STILL<br/> BUILDING!</div>
      <div className='flex flex-col mt-24 items-end p-5 gap-1 h-full'>
        <div>
          <Image
            src='/logo/finaleLOgo.png'
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