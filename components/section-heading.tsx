import React from "react";
import { FaHashtag } from "react-icons/fa";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl flex items-center gap-3 font-semibold capitalize mb-8 text-left">
      <FaHashtag className="text-purple-500" />
      {children}
    </h2>
  );
}
