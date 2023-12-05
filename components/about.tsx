"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-left text-sm md:text-base">
        Hi 👋, my name is{" "}
        <span className="font-bold text-purple-500 md:text-lg">Ayush</span>, I
        am a{" "}
        <span className="font-semibold text-purple-500 md:text-lg">2022</span>{" "}
        batch B.tech (CS) graduate 👨‍🎓. I primarily do{" "}
        <span className="font-semibold text-purple-500 md:text-lg">
          full-stack development
        </span>{" "}
        because{" "}
        <span className="italic md:text-lg text-yellow-600 dark:text-yellow-400">
          I am a creative 🎨 person, which suits frontend development, and a
          logical 🧠 person, which fits well with backend development.
        </span>{" "}
        My preferred stack is{" "}
        <span className="font-semibold text-purple-500 md:text-lg">
          Next.js / React, Node.js (Nest.js)
        </span>{" "}
        with TypeScript. Also,{" "}
        <span className="font-semibold text-purple-500 md:text-lg">
          Java (Spring Boot)
        </span>{" "}
        . I've also explored databases like{" "}
        <span className="font-semibold text-purple-500 md:text-lg">
          PostgreSQL
        </span>{" "}
        and{" "}
        <span className="font-semibold text-purple-500 md:text-lg">
          MongoDB
        </span>{" "}
        for data management and storage.
      </p>
      <p className="text-left text-sm md:text-base">
        In my free time, I indulge in various activities, I{" "}
        <span className="italic text-green-500 md:text-lg">Write Blogs</span>{" "}
        💻, immerse myself in{" "}
        <span className="italic text-green-500 md:text-lg">Games</span> 🎮,
        <span className="italic text-green-500 md:text-lg">Tweet</span> 🐦 about
        anything that strikes my fancy, and embark on{" "}
        <span className="italic text-green-500 md:text-lg">
          Thrilling trips
        </span>{" "}
        🌍.{" "}
        <span className="italic text-green-500 md:text-lg">Photography</span> 📸
        is another passion; I specialize in capturing travel moments,
        occasionally taking on paid{" "}
        <span className="italic text-green-500 md:text-lg">Photo Shoots</span>{" "}
        💃. Occasionally, I channel my creativity into{" "}
        <span className="italic text-green-500 md:text-lg">
          Keyboard Music{" "}
        </span>
        🎹. Oh, and I can't get enough of{" "}
        <span className="italic text-green-500 md:text-lg">Anime</span> 😺;{" "}
        <span className="italic md:text-lg text-yellow-600 dark:text-yellow-400">
          it's like the One Piece of my entertainment, a journey that never
          seems to end, always brimming with excitement and depth!
        </span>{" "}
        🏴‍☠️
      </p>
    </motion.section>
  );
}
