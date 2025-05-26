import React from "react";

export default function MainTitle({ title, subtitle }) {
  return (
    <div className="w-full text-center relative font-Roboto mb-[50px] sm:mb-[25px]">
      <h2 className="text-textTitle tracking-wide  font-extrabold sm:font-bold text-[clamp(1.25rem,10vw+.7rem,8rem)] uppercase">
        {title}
      </h2>
      <p className="absolute w-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] font-medium text-[clamp(1.1rem,6vw+.5rem,2.5rem)] text-textPrimary">
        {subtitle}
        <span className="absolute h-[3px] sm:h-[2px] w-[80px] rounded-lg bg-btnPrimary bottom-0 left-1/2 translate-x-[-50%]"></span>
      </p>
    </div>
  );
}
