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
    
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    }
  }, []);
  
  return (
    <main className="overflow-x-hidden">
      <div className='h-screen w-full flex-col'>     
        <motion.div className='w-full flex justify-center'>
          <Image
            className='w-[300px] md:w-[563px] h-auto md:h-[49px]'
            src='/dummyfont/PLAY.png'
            alt=''
            height={600}
            width={600}
          />
        </motion.div>

        <div className='w-full h-full flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 px-4 lg:px-0'>
          <motion.div className='font-babes text-[64px] lg:text-[140px] text-center lg:text-left'>EVM<br/> WARFARE</motion.div>
          <motion.div className='h-auto w-full lg:h-[800px] lg:w-[800px]'>
            <Image
              className='w-full lg:w-[781px] h-auto lg:h-[671px]'
              src='/cd/Group 1244831235.png'
              alt=''
              height={800}
              width={800}
            />
          </motion.div>
          <motion.div className='font-raj text-[20px] lg:text-[32px] font-medium w-full lg:w-1/4 text-center lg:text-left'>First-Person Shooters PC Game : Fast paced action-packed game with blockchain-integrated features - EVM Warfare.</motion.div>
        </div>
      </div>

      <div className='min-h-screen w-full relative flex items-center overflow-hidden'>
        <div className='absolute'>
          <Image
            className='w-full lg:w-[2831.18px] h-auto lg:h-[2000.8px]'
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

      <div className='h-screen w-full flex flex-col items-center justify-center font-babes text-[64px] lg:text-[140px] px-4 lg:px-0'>
        <motion.div className='text-center'>TELEGRAM<br/> GAMES</motion.div>
        <motion.div className='font-raj w-full lg:w-2/5 text-center text-[20px] lg:text-[36px]'>Rupture Labs Bot – your gateway to fun and exciting mini Web3 games right within Telegram!
        No complicated setups, no downloads—just pure entertainment at your fingertips.
        Ready to start playing? 
        Start the bot -  and let the games begin!</motion.div>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 w-full items-center justify-center px-4 lg:px-0'>
        <Image src='/cd/sdcard/SD_Card_Mockup copy.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_ChainKnight.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_CityJump.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_CosmicLeap.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_EVM2.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_fruitNINJA.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
        <Image src='/cd/sdcard/SD_P_Trailblazer.png' alt='' height={150} width={150} className='w-[100px] lg:w-auto h-auto'/>
      </div>

      <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0'>
        <div className='h-auto lg:h-[616px] flex flex-col items-center lg:items-end'>
          <div className='flex flex-col lg:flex-row justify-end items-center lg:items-start gap-6 lg:gap-0'>
            <div className='text-[64px] lg:text-[128px] font-babes text-center lg:text-right'>ESCAPE<br/> THE PIT</div>
            <div>
              <Image
                src='/screenshots/SD_Card_Mockup copy.png'
                alt=''
                height={616}
                width={415}
                className='w-full lg:w-auto h-auto'
              />
            </div>
          </div>
          <div className='w-full lg:w-2/5 font-raj text-center lg:text-left mt-6 lg:mt-0'>
            Fast-paced, endless vertical jumper where you must leap from platform to platform, escaping the rising lava beneath you. Test your reflexes as you scale higher, dodging obstacles and navigating tricky jumps. Challenge your friends to beat your high score. How long can you survive before the pit swallows you whole? Jump fast or get burned!
          </div>
        </div>
        <div className='w-full mt-6 lg:mt-0'>
          <Image
            src='/screenshots/FInal 1.png'
            alt=''
            height={616}
            width={415}
            className='w-full lg:w-auto h-auto'
          />
        </div>
      </div>
    </main>
  )
}

export default Products;