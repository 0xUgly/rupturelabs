"use client"
import React from 'react'
import Image from 'next/image'
import { MarqueeDemo } from '@/components/mark'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
const locomotiveScroll = new LocomotiveScroll();



function page() {
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
    <motion.div initial={{ opacity: 0 }}   transition={{ opacity:{duration:1.5}, x:{duration:0.5}, ease: "easeInOut" }}
        whileInView={{ opacity: 1}} >
    <Image
      className=''
      src='/shapes/PLAY.png'
      alt=''
      height={300}
      width={300}
      />
    </motion.div>
  <div className='flex items-center justify-center w-full gap-10 '>
    <div className='text-black   h-[300px] font-babes  w-auto font-bold text-4xl flex flex-col justify-between items-end'>
     <motion.div initial={{ opacity: 0, x: -400 }}   transition={{ opacity:{duration:1}, x:{duration:0.5}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, x: 0 }}   className='inline-block transform  text-[100px] '>WHO</motion.div>
     <motion.div initial={{ opacity: 0, x: -400 }}   transition={{ opacity:{duration:1}, x:{duration:0.5}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, x: 0 }}  className='inline-block transform  text-[100px]'>WE</motion.div>
     <motion.div initial={{ opacity: 0, x: -400 }}   transition={{ opacity:{duration:1}, x:{duration:0.5}, ease: "easeInOut"}}
        whileInView={{ opacity: 1, x: 0 }}  className='inline-block transform  text-[100px]'>ARE</motion.div>
    </div>
    <motion.div initial={{ opacity: 0, y: 100, }}   transition={{ opacity:{duration:1}, y:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0,  }} className=' h-[300px] w-1/5 font-medium text-black font-raj text-2xl'>
    Rupture Labs is an indie gaming studio specializing in Web3 game development. Our passionate team of developers are committed to create an advanced yet entertaining skill based game with an immersive gaming experience across multiple platforms<br/>
    (PC, WebGL , Telegram mini games and Android) and a wide genre of games.
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
  
  <div  className='h-screen bg-black flex'>
      <motion.div className='bg-black flex-1 flex items-center justify-center'>
        <motion.div initial={{ opacity: 0, x: -100 }}   transition={{ x:{duration:3}, ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, x: 0 }}>
        <Image
        
        src='/shapes/Group 1244831194.png'
        alt=''
        width={2416}
        height={748}
        />
        </motion.div>
      </motion.div>
      <div className='bg-black flex-1 flex flex-col items-center justify-center p-4'>
        <motion.div  initial={{ opacity: 0, y: 100 }}   transition={{  ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className=' w-full flex justify-start text-white text-8xl  font-babes items-'>BUILDING THE<br/> FUTURE OF<br/> GAMING</motion.div>
        <motion.div  initial={{ opacity: 0, y: 100 }}   transition={{  ease: "linear", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className=' w-full font-medium text-white flex  font-raj items-center p-2'>At Rupture Labs, we are building the future of gaming through decentralized IP co-created with the community and innovative products that enrich the 
        anime fan experience. Our Azuki collectibles have generated over $1B in secondary trading volume. Here are some things we’ve created so far.</motion.div>
      </div>
  </div>

  <div className='h-screen w-full bg-black'>
      < MarqueeDemo/>
  </div>
  <div className='h-screen text-black font-babes'>
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

  <div className='h-screen flex'>
      <div className='w-1/4 h-full bg-white'></div>
      <div className='flex-1 bg-white flex flex-col p-6'>
        <motion.div initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='font-babes text-black pt-24 text-[115px] '>ROADMAP</motion.div>
        <div className='flex flex-col gap-8 '>
          <div>
          <div className='font-babes text-black text-[44px] '>
            <motion.span initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='border-2 border-black rounded-[10px] pl-2 pr-2'>02 2024</motion.span>
          </div>
          <motion.div initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='font-babes text-black text-[44px] border-b-2 border-black'>LAUNCH OF MAIN PC GAME</motion.div>
          </div>
          <div className=''>
          <div className='font-babes text-black text-[44px] '>
            <motion.span initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='border-2 border-black rounded-[10px] pl-2 pr-2'>03 2024</motion.span>
          </div>
          <motion.div initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='font-babes text-black text-[44px] border-b-2 border-black'>Release of the first batchWebGL
          mini-games and Android game</motion.div>
          </div>
          <div>
          <div className='font-babes text-black text-[44px] '>
            <motion.span initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='border-2 border-black rounded-[10px] pl-2 pr-2'>04 2024</motion.span>
          </div>
          <motion.div initial={{ opacity: 0, y: 100 }}   transition={{ opacity:{duration:1.5}, ease: "easeInOut", type: "spring", stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }} className='font-babes text-black text-[44px] border-b-2 border-black'>Integration with additional
          blockchain networks</motion.div>
          </div>
        </div>
      </div>
  </div>
  <div className='h-screen w-full bg-black'>
      <div className='font-babes text-[145px] pt-24'>STILL<br/> BUILDING!</div>
      <div className='flex flex-col  items-end p-5 gap-1 '>
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

export default page