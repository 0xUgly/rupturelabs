"use client"

import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image"

const discImages = [
  "/cd/Cd_ChainKnight.png",
  "/cd/Cd_CityJump.png",
  "/cd/Cd_EscapeThePit.png",
  "/cd/CD_cosmicLeap.png",
  "/cd/Cd_ZooksQuest2 1.png",
  "/cd/Cd_TrailBlazer.png",

  
]

export function GameDiscMarquee() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden bg-transparent">
      <Marquee 
        pauseOnHover 
        className="[--duration:30s] [--gap:2rem]"
      >
        {discImages.map((image, index) => (
          <div key={index} className="relative w-[230px] h-[230px] mx-4 flex items-center transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={230}
              height={230}
              className="rounded-full"
            />
          </div>
        ))}
        {/* Duplicate the discs to ensure continuous flow */}
        {discImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="relative w-[230px] h-[230px] mx-4 transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={230}
              height={230}
              className="rounded-full"
            />
          </div>
        ))}
      </Marquee>
      
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black" />
    </div>
  )
}