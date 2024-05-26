"use client"

// image next
import Link from "next/link";

//hook next
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

const links = [
  { path: "/", name: "home" },
  { path: "/project", name: "my project" },
  { path: "/contact", name: "contact" },
];
const Nav = ({ containerStyle, LinkStyle, underlineStyle }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${LinkStyle}`}
          >
            {link.path === path && (
                <motion.span initia={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId="underline" className={`${underlineStyle}`}
                />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
