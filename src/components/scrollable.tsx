'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const RoadmapComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)
  const isInView = useInView(containerRef, { amount: 0.1 })

  const { scrollYProgress: contentScrollProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"]
  })

  const rotate = useTransform(contentScrollProgress, [0, 1], [0, -360])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting && isInView)
      },
      {
        threshold: 1,
        rootMargin: '2px 0px 0px 0px'
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [isInView])

  return (
    <div 
      
      className="relative min-h-screen bg-white"
    >
      <div className="relative top-0 h-24" />

      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 relative flex items-center">
          <motion.div 
            style={{ rotate }}
            className="absolute  left-[-70%] z-30 hidden lg:block"
          >

            <Image 
            className=''
              src="/shapes/rotatingwheel.png " 
              alt="Decorative rotating shape" 
              height={1923} 
              width={1506} 
            />
          </motion.div>
        </div>

        <div className="flex-1 px-4 lg:px-0 lg:ml-20">
          <div 
            className={`bg-white z-10 w-full`}
          >
            <h1 className="font-babes text-black text-[48px] sm:text-[72px] lg:text-[115px]">ROADMAP</h1>
          </div>
          
        

          <div className="pb-24">
            <div className="flex flex-col gap-8">
              <RoadmapItem date="02 2024" title="LAUNCH OF MAIN PC GAME" />
              <RoadmapItem 
                date="03 2024" 
                title="Release of the first batch WebGL mini-games and Android game" 
              />
              <RoadmapItem 
                date="04 2024" 
                title="Integration with additional blockchain networks" 
              />
              <RoadmapItem 
                date="04 2024" 
                title="Expansion of Telegram games using telegram bots and mini apps" 
              />
              <RoadmapItem 
                date="05 2024" 
                title="Launch of multiplayer features" 
              />
              <RoadmapItem 
                date="06 2024" 
                title="Introduction of in-game marketplace" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RoadmapItem = ({ date, title }: { date: string; title: string }) => (
  <motion.div 
    className="roadmap-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="font-babes text-black text-[24px] sm:text-[32px] lg:text-[44px]">
      <motion.span 
        className="border-2 border-black rounded-[10px] px-2 inline-block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {date}
      </motion.span>
    </div>
    <motion.div 
      className="font-babes text-black text-[24px] sm:text-[32px] lg:text-[44px] border-b-2 border-black"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {title}
    </motion.div>
  </motion.div>
)

export default RoadmapComponent