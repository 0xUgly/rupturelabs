'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
type ButtonName = 'home' | 'about' | 'products' | 'team' ;

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState<ButtonName>('home');
    const buttons: ButtonName[] = ['home', 'about', 'products', 'team'];

    useEffect(() => {
        const path = (pathname?.substring(1) || 'home') as ButtonName;
        setActiveButton(path);
    }, [pathname]);

    const handleNavigation = (newButton: ButtonName) => {
        setActiveButton(newButton);
        router.push(newButton === 'home' ? '/' : `/${newButton}`);
    };

    const handleArrowClick = (direction: 'left' | 'right') => {
        const currentIndex = buttons.indexOf(activeButton);
        let newIndex;
        if (direction === 'left') {
            newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        } else {
            newIndex = (currentIndex + 1) % buttons.length;
        }
        handleNavigation(buttons[newIndex]);
    };

    return (
        <>
         
        <footer className='h-24 p-5 w-full fixed bottom-0 z-10 bg-black font-title text-xl'>
            <div className='flex h-full w-full'>
                <div className='flex flex-row gap-20 h-full w-full items-center'>
                    <div 
                        className='bg-white text-black pl-2 pr-2 rounded-sm flex items-center justify-center cursor-pointer'
                        onClick={() => handleArrowClick('left')}
                    >
                        <Image
                            className='h-[30px]'
                            src='/shapes/leftarrow.svg'
                            alt='Left arrow'
                            height={20}
                            width={20}
                        />
                    </div>
                    {buttons.map((button) => (
                    <div 
                        key={button}
                        className={`relative p-4 flex items-center justify-center group cursor-pointer`}
                        onClick={() => handleNavigation(button)}
                    >
     
    
    {/* Show the PNG on the active (clicked) button */}
    {/* <Image
      className={`absolute bottom-0 transition-opacity duration-300 ${
        activeButton === button ? 'opacity-100' : 'opacity-0'
      }`}
      src='/animation/Stroke.png'
      alt=''
      height={200}
      width={200}
    /> */}
                        <span
                            className={`relative z-50 text-white group-hover:text-[#7FFF00] font-title ${
                                activeButton === button ? 'text-[#7FFF00]' : ''
                            } `}
                        >
                            {button.toUpperCase()}
                        </span>
                    </div>
                ))}
                    <div 
                        className='bg-white text-black pl-2 pr-2 rounded-sm flex items-center justify-center cursor-pointer'
                        onClick={() => handleArrowClick('right')}
                    >
                        <Image
                            className='h-[30px]'
                            src='/shapes/rightarrow.svg'
                            alt='Right arrow'
                            height={20}
                            width={20}
                        />
                    </div>
                </div>
                <div className='flex items-center h-full gap-3'>
                    <div className='cursor-pointer'><FaTwitter size={25}/></div>
                    <div className='cursor-pointer'><FaDiscord size={25}/></div>
                    <div className='cursor-pointer'><FaInstagram size={25}/></div>
                </div>
            </div>
        </footer>
        </>
    );
}