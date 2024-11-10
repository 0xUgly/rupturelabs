"use client"
import { useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
import { GameDiscMarquee } from '@/components/marqprod';
 function Products() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    // Clean up function
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    }
  }, []);
  return (
    <main>
      <div className='h-screen w-full flex-col'>     
        <motion.div  className='w-full flex  justify-center'>
        <Image
        className='w-[563px] h-[49px]'
        src='/dummyfont/PLAY.png'
        alt=''
        height={600}
        width={600}
        />
        </motion.div>

        <div className='w-full h-full flex-1 flex items-center justify-center'>
          <motion.div className='font-babes text-[140px]'>EVM<br/> WARFARE</motion.div>
          <motion.div className='h-[800px] w-[800px]' ><Image
        className='w-[781px] h-[671px]'
        src='/cd/Group 1244831235.png'
        alt=''
        height={800}
        width={800}
        /></motion.div>
          <motion.div  className='font-raj text-[32px] font-medium w-1/4'>First-Person Shooters PC Game : Fast paced action-packed game with blockchain-integrated features - EVM Warfare.</motion.div>
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
        <GameDiscMarquee/>
        </div>
      </div>


      <div className='h-screen w-full flex flex-col items-center justify-center font-babes text-[140px]'>
        <motion.div className='text-center'>TELEGRAM<br/> GAMES</motion.div>
        <motion.div  className=' font-raj w-2/5 text-center text-[36px]'>Rupture Labs Bot – your gateway to fun and exciting mini Web3 games right within Telegram!
        No complicated setups, no downloads—just pure entertainment at your fingertips.
        Ready to start playing? 
        Start the bot -  and let the games begin! </motion.div>
      </div>


      <div className='flex gap-8 w-full items-center justify-center'>
      <Image src='/cd/sdcard/SD_Card_Mockup copy.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_ChainKnight.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_CityJump.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_CosmicLeap.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_EVM2.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_fruitNINJA.png' alt='' height={150} width={150}/>
      <Image src='/cd/sdcard/SD_P_Trailblazer.png' alt='' height={150} width={150}/>
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

export default Products;