import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header className='h-24 w-full p-5 z-10 fixed bg-transparent'>
        <div>
            <Image
            src='/logo/BlackRL.png'
            alt=''
            height={80}
            width={80}
            />
        </div>
    </header>
  )
}

export default Header