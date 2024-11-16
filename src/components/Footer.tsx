'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';

type ButtonName = 'home' | 'about' | 'products' | 'team';

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState<ButtonName>('home');
    const [menuOpen, setMenuOpen] = useState(false); // Menu open state
    const buttons: ButtonName[] = ['home', 'about', 'products', 'team'];

    useEffect(() => {
        const path = (pathname?.substring(1) || 'home') as ButtonName;
        setActiveButton(path);
    }, [pathname]);

    const handleNavigation = (newButton: ButtonName) => {
        setActiveButton(newButton);
        router.push(newButton === 'home' ? '/' : `/${newButton}`);
        setMenuOpen(false); // Close the menu after navigation
    };

    return (
        <footer className='h-24 p-5 w-full fixed bottom-0 z-30 bg-black font-title text-xl'>
            <div className='flex h-full w-full items-center justify-between'>
                
                {/* Toggle Icon for Small Screens */}
                <div className='lg:hidden flex items-center cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <FaTimes size={25} className="text-white" /> // Close icon when menu is open
                    ) : (
                        <FaBars size={25} className="text-white" /> // Hamburger icon when menu is closed
                    )}
                </div>

                {/* Full-Screen Overlay Menu for Small Screens */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-2xl bg-opacity-95 flex flex-col items-center justify-center z-50">
                        <FaTimes
                            size={30}
                            className="text-white absolute top-5 right-5 cursor-pointer"
                            onClick={() => setMenuOpen(false)} // Close icon in overlay
                        />
                        {buttons.map((button) => (
                            <div
                                key={button}
                                className="p-4 text-3xl text-white font-title cursor-pointer"
                                onClick={() => handleNavigation(button)}
                            >
                                {button.toUpperCase()}
                            </div>
                        ))}
                    </div>
                )}

              
               

                {/* Menu Buttons - Only for Large Screens */}
                <div className="hidden lg:flex gap-20 items-center">
                    
                <div 
                    className='hidden lg:flex bg-white  text-black pl-2 pr-2 rounded-sm items-center justify-center cursor-pointer'
                    onClick={() => handleNavigation(buttons[(buttons.indexOf(activeButton) - 1 + buttons.length) % buttons.length])}
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
                            className='relative p-4 flex items-center justify-center group cursor-pointer'
                            onClick={() => handleNavigation(button)}
                        >
                            <span
                                className={`relative z-50  group-hover:text-[#7FFF00] font-title ${
                                    activeButton === button ? 'text-[#7FFF00]' : 'text-white'
                                }`}
                            >
                                {button.toUpperCase()}
                            </span>
                        </div>
                    ))}
                      <div 
                    className='hidden lg:flex bg-white text-black pl-2 pr-2 rounded-sm items-center justify-center cursor-pointer'
                    onClick={() => handleNavigation(buttons[(buttons.indexOf(activeButton) + 1) % buttons.length])}
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

                {/* Right Arrow - Only on Large Screens */}
              

                {/* Social Icons */}
                <div className='flex items-center gap-3'>
                    <div className='cursor-pointer'><FaTwitter size={25} className="text-white" /></div>
                    <div className='cursor-pointer'><FaDiscord size={25} className="text-white" /></div>
                    <div className='cursor-pointer'><FaInstagram size={25} className="text-white" /></div>
                </div>
            </div>
        </footer>
    );
}
