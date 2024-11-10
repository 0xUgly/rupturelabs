'use client'

import Image from 'next/image'
import { useState } from 'react'

const Team = [
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "Deep",
    role: "dev"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
  {
    image: "/placeholder.svg?height=200&width=200",
    name: "HAZARD",
    role: "Artist"
  },
]

export default function Component() {
  const [selectedMember, setSelectedMember] = useState(Team[0])

  return (
    <main className="font-coders-crux min-h-screen w-full bg-black flex">
      <div className="h-screen w-[380px] bg-[#FF4141] flex flex-col">
        <div className="h-[376px] flex items-center justify-center font-babes text-black text-[140px]">
          TEAM
        </div>
        <div className="text-center text-black text-2xl">
          <div>{selectedMember.name}</div>
          <div>{selectedMember.role}</div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-48 h-48 border-4 border-black rounded-2xl overflow-hidden">
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-x-8 gap-y-8 max-w-[1200px]">
          {Team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[16px] pt-3 text-black flex flex-col items-center w-[224px] cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-[90%] h-[200px] bg-black rounded-[16px] mb-1">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={270}
                  height={270}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
              <div className="text-center py-2">
                <div className="font-bold uppercase">{member.name}</div>
                <div className="text-md">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}