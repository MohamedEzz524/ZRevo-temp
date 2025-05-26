import React from "react";

export default function Label({ text }) {
  return (
    <span
      className="text-white bg-[rgba(0,0,0,.7)] text-[.9rem] py-[5px] px-[8px]
      absolute top-0 left-0 translate-x-[-25%] translate-y-[-150%] opacity-0
      scale-0 rounded-[4px] group-hover:scale-100 group-hover:opacity-100
      group-hover:translate-y-[-125%] main-trans pointer-events-none"
    >
      {text}
      <span
        className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[80%] scale-0 border-[5px] border-transparent border-t-[rgba(0,0,0,.7)]
              group-hover:scale-100  group-hover:translate-y-[100%] main-trans pointer-events-none"
      ></span>
    </span>
  );
}
