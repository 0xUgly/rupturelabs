"use client"
import { useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
import { GameDiscMarquee } from '@/components/marqprod';
import Tv from '@/components/tv';
import { SdMarquee } from '@/components/sdcardmarq';
import Link from 'next/link';
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
          <motion.div className='font-babes text-[64px] lg:text-[140px] text-center lg:w-1/4 lg:text-left'>EVM<br/> WARFARE</motion.div>
          <Link href='https://evmwarfare.com/' target="_blank">
          <motion.div className='h-auto w-full lg:h-[800px] lg:w-[800px]'>
            
            <Image
              className='w-full lg:w-[781px] h-auto lg:h-[671px]'
              src='/CDs/EVMcd.png'
              alt=''
              height={800}
              width={800}
            />
          </motion.div>
          </Link>
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

      <div>
      <SdMarquee/>
        <Tv/>
      </div>

      
    </main>
  )
}

export default Products;