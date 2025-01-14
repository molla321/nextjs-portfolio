"use client";

import React, { useEffect, useState } from "react";
import { ThemeToggler } from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }, []);

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className=" container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyle="hidden xl:flex gap-x-8 item-center"
              LinkStyle={"relative hover:text-primary transition-all"}
              underlineStyle={
                "absolute left-0 top-full h-[2px] bg-primary w-full"
              }
            />
            <ThemeToggler />
            {/* mobail nav */}

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
