"use client";

import { useState } from "react";

function DescriptionText({ text, work }) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const words = text.split(" ");

  const isLongText = words.length > 40;

  const handleToggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  const dysplayText =
    isLongText && !isTextVisible ? words.slice(0, 40).join(" ") + "..." : text;

  return (
    <article className="text-slate-800 dark:text-slate-100 text-base md:text-lg">
      <p className="rounded-md">
        {dysplayText}
        {isLongText && (
          <button
            onClick={handleToggleText}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out ml-2"
          >
            {isTextVisible ? "show less" : "show more"}
          </button>
        )}
      </p>
      <span className="block mb-3">{work}</span>
    </article>
  );
}

export default DescriptionText;
