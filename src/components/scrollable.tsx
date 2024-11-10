"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Component() {
  const roadmapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the roadmap content div
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end start"],
    container: roadmapRef // This makes it track the div's internal scroll
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className="relative h-screen">
      <div className="h-full sticky top-0 flex">
        <motion.div 
          ref={imageRef}
          style={{ rotate }}
          className='absolute z-0 left-[-45%] top-[-25%]'
        >
          <Image src='/shapes/vector 5 1.png' alt='' height={1923} width={1506} />
        </motion.div>
        <div className='w-1/4 h-full bg-white'></div>
        <div className='flex-1 ml-20 bg-white flex flex-col p-6 h-full'>
          <div className='font-babes text-black pt-24 text-[115px]'>ROADMAP</div>
          <div 
            ref={roadmapRef} 
            className='flex-1 overflow-y-scroll pr-4 h-[calc(100vh-240px)]'
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent'
            }}
          >
            <div className='flex flex-col gap-8 pb-8'>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>02 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>LAUNCH OF MAIN PC GAME</motion.div>
              </div>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>03 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>Release of the first batch WebGL mini-games and Android game</motion.div>
              </div>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>04 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>Integration with additional blockchain networks</motion.div>
              </div>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>04 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>Expansion of Telegram games using telegram bots and mini apps</motion.div>
              </div>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>05 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>Launch of multiplayer features</motion.div>
              </div>
              <div>
                <div className='font-babes text-black text-[44px]'>
                  <motion.span className='border-2 border-black rounded-[10px] pl-2 pr-2'>06 2024</motion.span>
                </div>
                <motion.div className='font-babes text-black text-[44px] border-b-2 border-black'>Introduction of in-game marketplace</motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}