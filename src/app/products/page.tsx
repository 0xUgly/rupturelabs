"use client"
import React from 'react'
import Image from 'next/image'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
const locomotiveScroll = new LocomotiveScroll();
export default function page() {
  return (
    <main>
      <div className='h-screen w-full flex-col'>     
        <motion.div initial={{ opacity: 0, y: 100, }}   transition={{ opacity:{duration:1}, x:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0,  }} className='w-full flex  justify-center'>
        <Image
        className='w-[563px] h-[49px]'
        src='/dummyfont/PLAY.png'
        alt=''
        height={600}
        width={600}
        />
        </motion.div>

        <div className='w-full h-full flex-1 flex items-center justify-center'>
          <motion.div initial={{ opacity: 0, x: -200, }}   transition={{ opacity:{duration:1}, x:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, x: 0,  }}  className='font-babes text-[140px]'>EVM<br/> WARFARE</motion.div>
          <motion.div initial={{ opacity: 0, rotate: -360, scale:0.5 }}   transition={{ opacity:{duration:0.5}, rotate:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, rotate: 0, scale:1 }} ><Image
        className='w-[660px] h-[660px]'
        src='/cd/Cd_EVM4 1.png'
        alt=''
        height={700}
        width={700}
        /></motion.div>
          <motion.div initial={{ opacity: 0, y: 200, }}   transition={{ opacity:{duration:1}, y:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0,  }}  className='font-raj text-[32px] font-medium w-1/4'>First-Person Shooters PC Game : Fast paced action-packed game with blockchain-integrated features - EVM Warfare.</motion.div>
        </div>
      </div>
      

      <div className='min-h-screen w-full relative flex items-center'>
        <div className='absolute'>
          <Image
          className='w-[2831.18px] h-[2000.8px]'
          src='/shapes/DIagonal 2.png'
          alt=''
          height={3000}
          width={3000}
          />
        </div>
        <div className='absolute'>
          <Image
          className='w-[2610.18px] h-[442.8px]'
          src='/cd/Group 1244831213.png'
          alt=''
          height={3000}
          width={3000}
          />
        </div>
      </div>


      <div className='h-screen w-full flex flex-col items-center justify-center font-babes text-[140px]'>
        <motion.div initial={{ opacity: 0, y: 100, }}   transition={{ opacity:{duration:1}, x:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0,  }} className='text-center'>TELEGRAM<br/> GAMES</motion.div>
        <motion.div initial={{ opacity: 0, y: 100, }}   transition={{ opacity:{duration:1}, x:{duration:1}, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0,  }} className=' font-raj w-2/5 text-center text-[36px]'>Rupture Labs Bot – your gateway to fun and exciting mini Web3 games right within Telegram!
        No complicated setups, no downloads—just pure entertainment at your fingertips.
        Ready to start playing? 
        Start the bot -  and let the games begin! </motion.div>
      </div>


      <div className=''>
      <Image
          className='w-[1716.18px] h-[512.8px]'
          src='/cd/Frame 1244831224.png'
          alt=''
          height={3000}
          width={3000}
          />
      </div>

      <div className='min-h-screen flex items-center justify-center'>
        <div className='h-[616px] flex flex-col items-end'>
          <div className='flex justify-end'>
          <div className='text-[128px] font-babes'>ESCAPE<br/> THE PIT</div>
          <div>
            <Image
            src='/screenshots/SD_Card_Mockup copy.png'
            alt=''
            height={616}
            width={415}
            />
          </div>
          </div>
          <div className='w-2/5 font-raj'>
          Fast-paced, endless vertical jumper where you must leap from platform to platform, escaping the rising lava beneath you. Test your reflexes as you scale higher, dodging obstacles and navigating tricky jumps. Challenge your friends to beat your high score. How long can you survive before the pit swallows you whole? Jump fast or get burned!

          </div>
        </div>
        <div className='w-full'>
          <Image
          src='/screenshots/FInal 1.png'
          alt=''
          height={616}
          width={415}
          />
        </div>
      </div>
    </main>


    
  )
}

