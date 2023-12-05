"use client";

import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaChevronDown } from "react-icons/fa";

export default function SectionDivider() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.a
      href="#about"
      className="mt-24 mb-28 font-sans md:flex hidden items-center gap-2 font-semibold dark:bg-neutral-900/50 bg-neutral-100/50 px-3 rounded-full  bg-opacity-50 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      onClick={() => {
        setActiveSection("About");
        setTimeOfLastClick(Date.now());
      }}
    >
      About Me
      <FaChevronDown />
    </motion.a>
  );
}
