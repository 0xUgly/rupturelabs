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
          <div key={index} className="relative p-4 w-[260px] h-[260px] mx-4 flex items-center transition-transform hover:scale-105">
            <Image
              src={image}
              alt=""
              width={280}  // Adjust width to fit within the container
              height={280} // Adjust height to match the width for consistency
              className="object-contain" // Ensures image fits within the box without overflow
            />
          </div>
        ))}
        {/* Duplicate the discs to ensure continuous flow */}
       
      </Marquee>
      
      {/* Gradient overlays */}
      
    </div>
  )
}
