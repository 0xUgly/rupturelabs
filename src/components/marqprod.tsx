"use client"

import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image"

const discImages = [
  "/CDs/Cd_ChainKnight.webp",
  "/CDs/Cd_CityJump.webp",
  "/CDs/Cd_EscapeThePit.webp",
  "/CDs/CD_cosmicLeap.webp",
  "/CDs/Cd_ZooksQuest2 1.webp",
  "/CDs/Cd_TrailBlazer.webp",
]

export function GameDiscMarquee() {
  return (
    <div className="relative h-[360px] w-full overflow-x-hidden bg-transparent">
      <Marquee 
        pauseOnHover 
        className="[--duration:30s] [--gap:2rem]"
      >
        {discImages.map((image, index) => (
          <div key={index} className="relative w-[330px] h-[330px] mx-4 flex items-center transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={330}
              height={330}
              className="rounded-full"
            />
          </div>
        ))}
        {/* Duplicate the discs to ensure continuous flow */}
        {discImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="relative w-[330px] h-[330px] mx-4 transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={330}
              height={330}
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