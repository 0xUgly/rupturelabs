import React from 'react'
import Icon from './shapeicon'
import Image from 'next/image'
function Main() {
  return (
    <div className='h-screen w-full overflow-hidden relative z-0 bg-white'>
        <div>
            <Image
            className='absolute'
            src='/shapes/shape_03 1.png'
            alt=''
            height={379}
            width={2266}
            />
        </div>
        <div>
            <Image
            className=''
            src='/shapes/shape_02 1.png'
            alt=''
            height={1347}
            width={1368}
            />
        </div>
    </div>
  )
}

export default Main