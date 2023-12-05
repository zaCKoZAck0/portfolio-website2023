"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-[45rem] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 text-left dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:id.ayushkryadav@gmail.com">
          id.ayushkryadav@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/25 dark:bg-opacity-80 text-purple-300 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/25 text-purple-300 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex items-center gap-2 w-full justify-between">
          <SubmitBtn />
          <div className="text-neutral-500 gap-2 flex items-center text-xs">
            or connect directly on
            <a
              className="group bg-gradient-to-b from-white/50 dark:from-black/50  shadow  p-3 text-gray-700 dark:text-gray-300 text-[1.2rem] hover:text-gray-950 dark:hover:text-gray-50 flex items-center gap-2 rounded-full focus:scale-[1.02] active:scale-[1.02] transition cursor-pointer"
              href="https://linkedin.com"
              target="_blank"
            >
              <BsTwitterX className="group-hover:rotate-[360deg] group-hover:scale-110 transition-all" />
            </a>
            <a
              className="group bg-gradient-to-b from-white/50 dark:from-black/50  shadow  p-3 text-gray-700 dark:text-gray-300 text-[1.2rem] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.02] active:scale-[1.02] transition cursor-pointer"
              href="https://linkedin.com"
              target="_blank"
            >
              <BsDiscord className="group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-[#5865F2] transition-all" />
            </a>
            <a
              className="group bg-gradient-to-b from-white/50 dark:from-black/50  shadow  p-3 text-gray-700 dark:text-gray-300 text-[1.2rem] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.02] active:scale-[1.02] transition cursor-pointer"
              href="https://linkedin.com"
              target="_blank"
            >
              <BsLinkedin className="group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-[#0A66C2] transition-all" />
            </a>
          </div>
        </div>
      </form>
    </motion.section>
  );
}
