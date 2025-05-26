import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Label from "./Label";

export default function BackHome() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        if (window.pageYOffset === 0) {
          setHide(true);
        } else {
          setHide(false);
        }
      }, 200);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!hide && (
        <a
          href="#home"
          className="fixed z-50 group right-[20px] bottom-[20px] "
        >
          <FontAwesomeIcon
            className=" rounded-full text-white bg-textBody hover:bg-btnPrimary main-trans p-[7px] content-center text-center"
            icon={faAngleUp}
            size="2xl"
          />

          <Label text="Top" />
        </a>
      )}
    </>
  );
}
