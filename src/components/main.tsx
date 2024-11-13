"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Draggable from 'react-draggable'
function Main() {
  const [Showdiv, SetShowdiv] = useState(true)
  return (
    <div className="h-screen w-full overflow-hidden bg-[url('/bg/patternbg.png')] bg-cover bg-center relative z-0">
        <div className='h-full w-full flex items-center justify-center'>
        {Showdiv && (
          <Draggable>
          <div className='bg-white z-30 border-2 border-black  lg:h-[241px] lg:w-[586px] h-[240px] m-2 absolute flex items-center justify-evenly p-4'>
            <div>
            <Image
            className=''
            src='/logo/Blacklogo.png'
            alt=''
            height={131}
            width={94}
            />
            </div>
            <div className='flex-col w-2/4 text-black items-center justify-center'>
              <div>
              <Image
            className='z-0'
            src='/text/text.png'
            alt=''
            height={130}
            width={403}
            />
              </div>
            
             
            </div>
            <div  className='absolute bottom-0 text-black flex items-center justify-center mb-3 w-full '>
              <span onClick={() => SetShowdiv(false)} className='cursor-pointer'>
              <Image
                className='z-0'
                src='/text/Focus.png'
                alt=''
                height={33}
                width={124}
                />
              </span>
            </div>
          </div>
          </Draggable>
        )}
           
        </div>
        
    </div>
  )
}

export default Main