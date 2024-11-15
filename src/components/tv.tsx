'use client'

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const videos = [
  '/Tv/Tv=escape.mp4',
 
  
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
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='relative w-[600px] h-[600px]'>
        <video
          ref={videoRef}
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
          key={currentVideoIndex}
          muted
          loop
          playsInline
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
          src='/Tv/TV2.webp'
          alt='TV Frame'
          layout='fill'
          objectFit='contain'
          className='z-10 pointer-events-none'
        />
        <div 
          className='absolute top-[20%] right-[12%] cursor-pointer z-20'
          onClick={handleKnobClick}
        >
          <Image
            src='/Tv/KnobFinal.webp'
            alt='TV Knob'
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  )
}
