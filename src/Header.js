import { useState, useEffect, useRef } from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import LinkComponent from "./LinkComponent";
import { useTheme } from "./ThemeProvider";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "what-i-do", label: "What I Do" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "client", label: "Client" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { link: "http://www.facebook.com", icon: faFacebook, color: "#0866FF" },
  {
    link: "https://www.linkedin.com/in/mohamed-elsayed-327b77244",
    icon: faLinkedin,
    color: "#0A66C2",
  },
  {
    link: "https://github.com/MohamedEzz524",
    icon: faGithub,
    color: "#fff",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const observer = useRef(null);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.current.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 100 to your desired scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setTimeout(() => {
        const width = window.innerWidth;

        // Set states directly based on breakpoints
        setIsSmall(width <= 768);
        setIsMedium(width <= 1100);
      }, 150);
    };
    // Initial check on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleMenuClick = (id) => {
    setActiveLink(id);
    setShowMenu(false);
  };

  return (
    <nav
      className={`
       fixed top-0 left-0 z-[1000] h-[70px] w-full 
      flex justify-between items-center px-5  
      font-Poppins transition-all duration-300
      ${isScrolled ? " bg-navBg shadow-md" : "bg-transparent"} `}
    >
      <div className="text-3xl tracking-tight ">
        <span className="bg-textGrad text-transparent bg-clip-text">Z</span>
        <span className="bg-[#eee] bg-clip-text text-transparent">Revo</span>
      </div>
      {!isMedium ? (
        <ul className="flex justify-center  gap-6 h-full text-lg ">
          {links.map(({ id, label }, i) => (
            <li
              key={i}
              className={`${
                activeLink === id
                  ? "text-btnPrimary pointer-events-none"
                  : "text-white"
              }  h-full p-2 text-center w-fit relative main-trans before:content-[""] before:absolute before:bottom-[5px] before:left-0 before:w-0 before:h-[3px] before:rounded-[5px] before:bg-gradient-to-r from-btnPrimary to-btnSecondary before:main-trans hover:before:w-full hover:text-btnPrimary`}
            >
              <a
                href={`#${id}`}
                className="inline-block w-full h-full content-center"
                onClick={() => setActiveLink(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className=" flex-1 flex h-full items-center justify-end mr-[20px] max-md:mr-0">
          <div
            className="flex flex-col w-[40px] h-4/5 justify-center items-center gap-2 cursor-pointer "
            onClick={() => setShowMenu(!showMenu)}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`w-full h-[3px] bg-white rounded-[5px] main-trans ${
                  showMenu
                    ? "first-of-type:rotate-45 first-of-type:translate-y-[12px] last-of-type:rotate-[-45deg] last-of-type:translate-y-[-12px] [&:nth-child(2)]:opacity-0 "
                    : ""
                } `}
              ></div>
            ))}
          </div>
          {/* Menu Links With Smooth transition */}
          <ul
            className={`absolute w-full bottom-0 left-0 translate-y-[100%] main-trans overflow-hidden ${
              showMenu ? "max-h-[500px]  py-[20px]" : "max-h-0  py-0"
            } z-50 px-[10px] shadow-md  bg-navBg`}
          >
            {links.map(({ id, label }, i) => (
              <li
                className=" text-white w-full  border-b-[1px]  border-textBody last:border-0  hover:text-btnPrimary"
                key={i}
              >
                <a
                  href={`#${id}`}
                  className={`${
                    activeLink === id ? "text-btnPrimary" : ""
                  } py-[10px] cursor-pointer block`}
                  onClick={() => handleMenuClick(id)}
                >
                  {label}
                </a>
              </li>
            ))}
            {isSmall && (
              <li className="flex items-center gap-5 py-[10px]">
                {socials.map(({ link, icon, color }, i) => (
                  <LinkComponent
                    key={i}
                    link={link}
                    icon={icon}
                    color={color}
                  />
                ))}
              </li>
            )}
          </ul>
        </div>
      )}

      {!isSmall && (
        <div className="flex items-center gap-5 text-xl h-full">
          <button
            onClick={toggleTheme}
            className={` p-2 rounded-full main-trans ${
              isScrolled ? "bg-[#111]" : "bg-transparent"
            } `}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {socials.map(({ link, icon, color }, i) => (
            <LinkComponent key={i} link={link} icon={icon} color={color} />
          ))}
        </div>
      )}
    </nav>
  );
}
