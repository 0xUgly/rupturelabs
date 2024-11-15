"use client"

import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image"

const SDImages = [
  "/sdcard/SD_Card_Mockup copy.png",
  "/sdcard/SD_P_ChainKnight.png",
  "/sdcard/SD_P_CityJump.png",
  "/sdcard/SD_P_CosmicLeap.png",
  "/sdcard/SD_P_EVM2.png",
  "/sdcard/SD_P_fruitNINJA.png",
  "/sdcard/SD_P_Trailblazer.png",
  "/sdcard/SD_P_ZooksQuest.png",
]

export function SdMarquee() {
  return (
    <div className="relative h-[460px] flex items-center w-full overflow-x-hidden bg-transparent">
      <Marquee 
        pauseOnHover 
        className="[--duration:30s] [--gap:2rem]"
      >
        {SDImages.map((image, index) => (
          <div key={index} className="relative p-4 w-[280px] h-[280px] mx-4 flex items-center transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={330}
              height={330}
              className=""
            />
          </div>
        ))}
        {/* Duplicate the discs to ensure continuous flow */}
        {SDImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="relative p-4 w-[280px] h-[280px] mx-4 transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={330}
              height={330}
              className=""
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