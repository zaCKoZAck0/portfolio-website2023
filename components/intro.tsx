"use client";

import Image from "next/image";
import { Octokit } from "octokit";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsCursorFill, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  FaArrowRight,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import {
  IoGitMergeOutline,
  IoCloseOutline,
  IoGitPullRequestOutline,
} from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [merged, setMerged] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMerged((prevMerged) => !prevMerged);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] md:h-[70vh] flex flex-col justify-center text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col mb-14 justify-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex text-green-500 items-end gap-2 m-5 text-md"
        >
          <span className="beacon bg-green-500"></span>
          Open to Work
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="border-b dark:border-white/25 border-black/25"
        >
          <div className="w-fit flex bg-opacity-50 md:text-base text-sm border-b-2 border-blue-500 px-2 py-1 rounded-t-lg dark:bg-gray-800 bg-gray-100 items-center gap-1">
            <BiLogoTypescript className="text-[#007ACC] md:h-6 md:w-6 h-5 w-5" />
            <span className="text-green-500">fullstack-developer.ts</span>
            <IoCloseOutline className="ml-2 md:h-5 md:w-5 h-4 w-4 text-black/75 dark:text-white/75" />
          </div>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="md:text-9xl text-6xl font-outline-2 text-transparent font-black"
          >
            ZACKOZACK
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          id="figma-cursor"
          className="flex absolute md:left-1/2 left-1/4 items-center gap-1"
        >
          <div className="mt-14 bg-pink-500 md:text-base text-sm text-white px-2 shadow-md">
            UI / UX Designer
          </div>
          <BsCursorFill
            className="text-pink-500 stroke-white"
            stroke="white"
            strokeWidth="1px"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex items-center text-sm justify-end gap-2 font-sans text-black/70 dark:text-white/70"
        >
          <div
            className={`flex transition-all bg-opacity-50 duration-300 text-white items-center gap-1 md:py-1 py-0.5 font-sans md:px-4 px-2 rounded-full ${
              merged ? "bg-purple-600" : "bg-green-600"
            }`}
          >
            {merged ? (
              <>
                <IoGitMergeOutline className="h-4 w-4" />
                Merged
              </>
            ) : (
              <>
                <IoGitPullRequestOutline className="h-4 w-4" />
                Open
              </>
            )}
          </div>
          <span className="font-semibold">Open Source</span> Contributor
        </motion.div>
      </div>

      {/* <div className="flex mb-14 text-right items-center gap-2">
        <FaGithub className="h-20 w-20 opacity-50" />
        <div className="flex flex-col gap-0.5 text-sm">
          <div>
            <span className="font-semibold font-sans mr-2">
              Pull Requests:{" "}
            </span>
            {`${githubData.pullRequestCount}`}
          </div>
          <div>
            <span className="font-semibold font-sans mr-2">Issues: </span>
            {`${githubData.issueCount}`}
          </div>
          <div>
            <span className="font-semibold font-sans mr-2">Commits: </span>
            {`${githubData.commitCount}`}
          </div>
          <div>
            <span className="font-semibold font-sans mr-2">Code Reviews: </span>
            {`${githubData.codeReviewCount}`}
          </div>
        </div>
      </div> */}

      <motion.div
        className="flex items-center justify-center gap-2 pr-2 md:text-lg md:font-medium text-sm"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group text-base shadow  bg-gradient-to-b from-purple-400 dark:from-purple-700 font-sans text-white dark:text-white/75 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-[1.02] font-semibold  active:scale-[1.02] transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <FaArrowRight className="group-hover:translate-x-0.5 transition" />
        </Link>

        <a
          className="group font-sans text-base bg-gradient-to-b  from-white/50 dark:from-black/50  px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-[1.02] shadow  active:scale-[1.02] font-semibold transition cursor-pointer"
          href="/CV.pdf"
          download
        >
          <span className="hidden md:block">Download</span> CV{" "}
          <HiDownload className="group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className="group bg-gradient-to-b from-white/50 dark:from-black/50  shadow  p-3 text-gray-700 dark:text-gray-300 text-[1.2rem] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.02] active:scale-[1.02] transition cursor-pointer"
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedin className="group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-[#0A66C2] transition-all" />
        </a>

        <a
          className="group bg-gradient-to-b from-white/50 dark:from-black/50  p-3 text-gray-700 flex items-center gap-2 text-[1.2rem] dark:text-gray-300 rounded-full focus:scale-[1.02] hover:text-gray-950 active:scale-[1.02] shadow  transition cursor-pointer"
          href="https://github.com"
          target="_blank"
        >
          <FaGithub className="group-hover:rotate-[360deg] group-hover:scale-110 transition-all" />
        </a>
      </motion.div>
    </section>
  );
}
