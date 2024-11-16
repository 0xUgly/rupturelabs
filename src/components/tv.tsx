'use client'

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import SpinningGlowingCircle from '@/components/glowingircle'

const videos = [
  '/video/BNBCityTV.mp4',
  '/video/EscapeThepitTV.mp4',
  '/video/KromaGame.mp4',
  '/video/TiltedTV.mp4',
  '/video/zookQuest.mp4',
]

const titles = [
  'BNB CITY',
  'ESCAPE THE PIT',
  'KROMA GAME',
  'TILTED TAP',
  'ZOOK QUEST',
]

export default function Component() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleKnobClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(error => console.error("Video playback failed:", error))
    }
  }, [currentVideoIndex])

  return (
    <div className='h-screen w-full flex flex-col items-center justify-start'>
      <div className='relative w-[620px] h-[620px]'>
        <div className="absolute top-[135px] left-[70px] z-0">
          <video
            ref={videoRef}
            className="w-[365px] h-full"
            key={currentVideoIndex}
            muted
            loop
            playsInline
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Image
          src='/Tv/TV2.webp'
          alt='TV Frame'
          layout='fill'
          objectFit='contain'
          className='z-10 pointer-events-none'
        />
        <div 
          className='absolute top-[24%] right-[12%] cursor-pointer z-20'
          onClick={handleKnobClick}
        >
          <SpinningGlowingCircle/>
          <Image
            src='/Tv/KnobFinal.webp'
            alt='TV Knob'
            width={70}
            height={70}
          />
        </div>
        <div 
          className='absolute TEXT-[#959595] top-[36%] text-[11px] right-[13%] cursor-pointer z-20'
          
        >
          
          PLAY/NEXT
        </div>
      </div>
      <div 
        className="mt-1 text-[128px] font-babes  tracking-wider text-center transition-opacity duration-300"
        style={{
          opacity: 1,
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
        }}
      >
        {titles[currentVideoIndex]}
      </div>
    </div>
  )
}