"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
const client = createThirdwebClient({ clientId: '9c1214736c9cd2a1a4c8cfd8eae07ab8' });

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and past 100px
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`h-24 w-full p-5 z-10 fixed bg-transparent transition-transform duration-300 flex justify-between ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Image
          src="/logo/BlackRL.png"
          alt="Logo"
          height={80}
          width={80}
        />
      </div>
      <ConnectButton client={client} />;
    </header>
  );
}

export default Header;
