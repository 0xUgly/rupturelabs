'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

type ButtonName = 'home' | 'about' | 'docs' | 'team' | 'socials';

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState<ButtonName>('home');
    const buttons: ButtonName[] = ['home', 'about', 'docs', 'team', 'socials'];

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
        <footer className='h-24 p-5 w-full fixed bottom-0 bg-black'>
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
                            className={`${activeButton === button ? 'text-green-400' : 'text-white'} cursor-pointer hover:text-green-400`}
                            onClick={() => handleNavigation(button)}
                        >
                            {button.toUpperCase()}
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
                <div className='flex items-center'>XXXXX</div>
            </div>
        </footer>
    );
}