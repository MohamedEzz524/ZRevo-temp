import { useEffect, useRef, useState } from "react";
import homeImage from "./assets/images/stardust.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const phrases = [
  "I'm Mo Revo",
  "I'm a Freelancer",
  "I'm a Designer",
  "I'm a Developer",
];
const baseText = "I'm";

export default function Home() {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const typingSpeed = useRef(150);
  const pauseBetweenPhrases = useRef(2000);

  useEffect(() => {
    let timer;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentFullText =
        currentPhraseIndex === 0
          ? currentPhrase
          : `${baseText} ${currentPhrase.split(" ").slice(1).join(" ")}`;

      if (isDeleting) {
        // Backspace effect - only delete back to "I'm"
        if (text.length > baseText.length) {
          setText(text.substring(0, text.length - 1));
          typingSpeed.current = 50;
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          timer = setTimeout(type, 500); // Pause before typing next phrase
          return;
        }
      } else {
        // Typing effect
        const targetText =
          currentPhraseIndex === 0
            ? currentPhrase
            : `${baseText} ${currentPhrase.split(" ").slice(1).join(" ")}`;
        setText(targetText.substring(0, text.length + 1));
        typingSpeed.current = 150;
      }

      // Determine next action
      if (!isDeleting && text === currentFullText) {
        // Pause at end of phrase before deleting
        setIsFinished(true);
        timer = setTimeout(
          () => {
            setIsDeleting(true);
            setIsFinished(false);
          },

          pauseBetweenPhrases.current
        );
      } else if (!isDeleting) {
        // Continue typing
        timer = setTimeout(type, typingSpeed.current);
      } else {
        // Continue deleting
        timer = setTimeout(type, typingSpeed.current);
      }
    };

    timer = setTimeout(type, typingSpeed.current);

    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting]);

  return (
    <section
      id="home"
      className={`relative    w-full h-[100dvh] grid place-items-center before:absolute before:content-[''] before:inset-0 before:left-0 before:top-0 ]`}
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="text-[#fff] w-4/5 max-sm:w-full max-sm:px-[10px] text-center">
        <div className="font-Roboto font-medium text-[clamp(1.75rem,2vw+0.5rem,3rem)] mb-[10px]">
          Welcome
        </div>
        <div className="min-h-[60px]  font-Roboto font-bold text-[clamp(1.75rem,6vw+1rem,7rem)] mb-[10px]">
          {text}
          <span
            className={`${
              isFinished
                ? "animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                : ""
            } text-primary`}
          >
            |
          </span>
        </div>
        <div className="font-Poppins text-gray-200 text-[clamp(1.1rem,1.4vw+0.4rem,2rem)] mb-[30px]">
          based in 10th Of Ramadan, Egypt.
        </div>
        <button
          type="button"
          className="rounded-[50px] font-Roboto font-medium py-[12px] content-center px-[35px] border-2 border-solid border-btnPrimary text-btnPrimary text-[clamp(1rem,.9vw+0.3rem,1.25rem)] hover:bg-btnPrimary hover:text-white main-trans"
        >
          Hire Me
        </button>
      </div>
      <a
        href="#about"
        className="absolute bottom-[50px] left-[calc(50% - 10px)] text-white cursor-pointer text-[20px] animate-bounce"
      >
        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
      </a>
    </section>
  );
}
