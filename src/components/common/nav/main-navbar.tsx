"use client"
import React, { useState, useEffect } from "react";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";


export function MainNav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
}
