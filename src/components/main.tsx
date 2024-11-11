"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Draggable from 'react-draggable'
function Main() {
  const [Showdiv, SetShowdiv] = useState(true)
  return (
    <div className='h-screen w-full overflow-hidden relative z-0 bg-white'>
        <div className='h-full w-full flex items-center justify-center'>
        {Showdiv && (
          <Draggable>
          <div className='bg-white z-30 border-2 border-black  h-[231px] w-[586px] absolute flex items-center justify-evenly p-4'>
            <div>
            <Image
            className=''
            src='/logo/black.png'
            alt=''
            height={131}
            width={94}
            />
            </div>
            <div className='flex-col w-2/4 text-black items-center justify-center'>
              <div>Welcome To Rupture Labs</div>
              <div>Copyright (c)Rupture Labs<br/> Disk Space Free: 19796K<br/> Memory Free:   301K</div>
             
            </div>
            <div  className='absolute bottom-0 text-black text-center w-full p-4'>
              <span onClick={() => SetShowdiv(false)} className='border-2 border-black px-8 rounded-[10px] py-2 cursor-pointer'>OK</span>
            </div>
          </div>
          </Draggable>
        )}
            <Image
            className='z-0'
            src='/bg/6725513 2.png'
            alt=''
            height={1000}
            width={1920}
            />
        </div>
        
    </div>
  )
}

export default Main