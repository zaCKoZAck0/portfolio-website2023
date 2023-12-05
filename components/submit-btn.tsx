import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group font-sans font-semibold flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-b from-gray-900 to-gray-900/50 duration-300 w-[7rem] shadow text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
        </>
      )}
    </button>
  );
}
