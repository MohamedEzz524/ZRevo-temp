import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Label from "./Label";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "brown",
  "orange",
  "cyan",
  "pink",
  "indigo",
];

export default function ColorSwitcher() {
  const [showColors, setShowColors] = useState(false);
  const [currentColor, setCurrentColor] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("color") || "teal";
    }
    return "teal";
  });

  useEffect(() => {
    // Set the initial color based on localStorage or default to teal
    localStorage.setItem("color", currentColor);
    document.documentElement.setAttribute("data-color", currentColor);
  }, [currentColor]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const resetDataColor = () => {
    setCurrentColor("teal");
    localStorage.setItem("color", "teal");
    document.documentElement.setAttribute("data-color", "teal");
  };

  return (
    <div
      className={`fixed top-1/2 right-0  translate-y-[-50%] flex  items-start main-trans  ${
        showColors ? "translate-x-[0px]" : "translate-x-[220px]"
      }`}
    >
      <FontAwesomeIcon
        icon={faGear}
        className="block bg-gray-700 text-white p-3 text-xl cursor-pointer  hover:rotate-45 transition-transform rounded-full"
        onClick={() => setShowColors(!showColors)}
      />

      <ul className="relative p-[20px] w-[220px]  bg-[#fff]  shadow-xl font-Poppins ">
        <div className="col-span-5 py-[10px] text-navBg border-b-[1px] border-[#f0f0f0] text-[clamp(.9rem,1.2vw+.2rem,1.1rem)]">
          Color Switcher
        </div>
        <div className="grid grid-cols-5 gap-3 py-[20px]">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ background: color }}
              className={`relative group w-[25px] h-[25px] rounded-full main-trans cursor-pointer hover:scale-110 ${
                currentColor === color ? "scale-75" : ""
              } transition-transform`}
              onClick={() => handleColorChange(color)}
            >
              <Label text={color} />
            </li>
          ))}
        </div>
        <div
          onClick={resetDataColor}
          className="col-span-5 bg-btnPrimary  hover:bg-btnSecondary main-trans text-white text-center rounded-[4px] py-[10px] cursor-pointer mt-[10px]"
        >
          Set Default Teal
        </div>
      </ul>
    </div>
  );
}
