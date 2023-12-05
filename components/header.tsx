"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaHashtag } from "react-icons/fa";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isOpen, setIsOpen] = React.useState(false);
  const variants = {
    open: {
      width: "300px",
      height: "auto",
      borderRadius: "20px",
    },
    closed: {
      width: "96px",
      height: "12px",
      borderRadius: "99px",
    },
  };

  const iconVariants = {
    open: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
    },
    closed: {
      width: "12px",
      height: "12px",
      borderRadius: "4px",
    },
  };

  useEffect(() => {}, [activeSection]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="md:flex hidden fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <FaHashtag className="text-purple-500 mr-1" />
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
