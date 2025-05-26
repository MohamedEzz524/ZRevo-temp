import { useEffect, useRef, useState } from "react";
import MainTitle from "./MainTitle";
import { gallery } from "./assets/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "./LinkComponent";

export default function Portfolio() {
  const [listed, setListed] = useState([...gallery]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [transitionStage, setTransitionStage] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleFilter = (e) => {
    setActiveFilter(e);
    setTransitionStage("filtering");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeFilter === "All") {
        setListed(gallery);
      } else {
        setListed(
          gallery.filter((ele) => {
            return ele.category === activeFilter;
          })
        );
      }
      setTransitionStage("");
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [activeFilter]);

  // Click outside effect
  useEffect(() => {
    if (!Object.keys(selectedItem).length) return;

    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedItem]);

  const openOverlay = (item) => {
    setSelectedItem({ ...item });
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setSelectedItem({});
    document.body.style.overflow = "";
  };

  const handleCanPlay = () => {
    // Reduce quality during playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.volume = 0.8;
    }
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section id="portfolio" className="relative w-full bg-bgSecondary">
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="Portfolio" subtitle="My Work " />
        <div className="w-full flex justify-center gap-[20px] max-sm:gap-[10px] items-center mb-[40px] font-Poppins ">
          {["All", "Design", "Brand", "Photo"].map((e, i) => (
            <button
              key={i}
              className={`relative border-none cursor-pointer p-[10px] text-textSecondary hover:text-btnPrimary main-trans  before:content-[''] before:absolute before:main-trans  before:h-[2px] before:left-0 before:bottom-0 before:bg-btnPrimary
                ${activeFilter === e ? "before:w-full " : "before:w-0"} `}
              onClick={() => handleFilter(e)}
            >
              {e === "All" ? e : e + "s"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[20px] grid-rows-[100px] grid-flow-dense relative ">
          {listed.map((e, i) => (
            <div
              key={e.id}
              onClick={() => openOverlay(e)}
              style={{
                gridRowEnd: `span ${Math.round(e.height / 100)}`,
                transitionDelay: `${i * 50}ms`,
              }}
              className={` col-span-1 max-sm:col-span-3 relative rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group 
                ${
                  e.category === activeFilter || activeFilter === "All"
                    ? "scale-100 opacity-100 "
                    : transitionStage
                    ? "opacity-0 scale-0 "
                    : "hidden"
                }`}
            >
              <div className="absolute flex flex-col items-center justify-center gap-[20px]   text-textPrimary left-0 bottom-0 opacity-0 w-full main-trans h-full bg-[rgba(0,0,0,.8)] group-hover:opacity-80  z-10 ">
                <div className=" font-medium text-[1.375rem] tracking-wide">
                  {e.title}
                </div>
                <div className="font-Roboto font-medium text-[1rem] text-[#ccc]">
                  {e.desc}
                </div>
              </div>
              <img
                style={{ height: `${e.height}px` }}
                className="object-cover inline-block w-full h-auto group-hover:scale-105 main-trans"
                src={e.src}
                alt={e.title}
              />
            </div>
          ))}
        </div>
        {Object.keys(selectedItem).length > 0 && (
          <div className=" fixed inset-0  grid place-items-center bg-[rgba(0,0,0,.8)] z-[1000] font-Poppins overflow-y-auto ">
            {selectedItem.vi === "video" ? (
              <div
                className="w-fit m-5 relative flex justify-center shadow-md "
                ref={overlayRef}
              >
                <video
                  ref={videoRef}
                  className="max-h-[60vh] "
                  autoPlay
                  controls
                  preload="metadata"
                  onEnded={() => console.log("Video ended")}
                  onCanPlay={handleCanPlay}
                  onProgress={(e) => {
                    const percent =
                      (e.target.currentTime / e.target.duration) * 100;
                    setProgress(percent);
                  }}
                >
                  <source src={selectedItem.video} type="video/webm"></source>
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-10 left-0 flex items-center gap-2 w-full bg-[rgba(0,0,0,0.5)]">
                  <button onClick={togglePlay}>▶️</button>
                  <input
                    type="range"
                    value={progress}
                    onChange={(e) => {
                      setProgress(e.target.value);
                      videoRef.current.currentTime =
                        (e.target.value / 100) * videoRef.current.duration;
                    }}
                  />
                </div>
                <FontAwesomeIcon
                  className="absolute top-[-12px] right-[-12px] shadow-md  hover:bg-gray-100 main-trans text-gray-600 p-[5px] text-[24px] bg-white rounded-full  z-2 cursor-pointer "
                  icon={faXmark}
                  onClick={closeOverlay}
                />
              </div>
            ) : selectedItem.category === "Design" ? (
              <div
                className="container relative p-[20px] bg-bgPrimary m-auto  max-md:w-[90%]"
                ref={overlayRef}
              >
                <h3 className="mb-[20px] w-full text-center text-white text-sizeTitle">
                  Project Title {selectedItem.id}
                </h3>

                <div className="flex  max-md:flex-col ">
                  <div className=" md:w-1/2 ">
                    <img
                      className="h-full w-full max-md:h-auto object-cover max-h-[60vh] rounded-[15px]"
                      src={selectedItem.src}
                      alt={selectedItem.title}
                    ></img>
                  </div>
                  <div className="basis-[50%] text-sizeBody text-textSecondary ">
                    <div className=" px-[20px] max-md:px-0 max-sm:mt-[10px]">
                      <h4 className="font-medium text-sizeSubtitle text-textPrimary mb-[10px]">
                        Project Info
                      </h4>
                      <p className=" mb-[25px]">
                        Quidam lisque persius interesset his et, in quot quidam
                        persequeris vim, ad mea essent possim iriure. Lisque
                        persius interesset his et, in quot quidam persequeris
                        vim, ad mea essent possim iriure.
                      </p>
                      <h4 className="font-medium text-sizeSubtitle text-textPrimary mb-[10px]">
                        Project Details
                      </h4>
                      <ul className="">
                        {selectedItem.Details.map((d, i) => (
                          <li
                            key={`#d${i}`}
                            className="py-[10px] border-b-[1px] border-textTitle"
                          >
                            <span className="text-textPrimary mr-[10px]">
                              {d.id}:
                            </span>
                            {/^w{3}.[a-z][A-z]+.com*/g.test(d.value) ? (
                              <a
                                href={d.value}
                                className="text-btnPrimary hover:text-btnSecondary"
                              >
                                {d.value}
                              </a>
                            ) : (
                              d.value
                            )}
                          </li>
                        ))}
                        <li className="mt-[10px] flex items-center">
                          <span className="text-textPrimary mr-[10px] ">
                            Share:
                          </span>
                          <ul className="inline-flex gap-[10px] px-[10px]">
                            {selectedItem.Share.map((s, i) => (
                              <li key={`#s${i}`} className="py-[10px] ">
                                <LinkComponent
                                  link={s.socialLink}
                                  icon={s.social}
                                  color={s.color}
                                />
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <FontAwesomeIcon
                  className="absolute top-[-12px] right-[0px] shadow-md  hover:bg-gray-100 main-trans text-gray-600 p-[5px] text-[24px] bg-white rounded-full  z-2 cursor-pointer "
                  icon={faXmark}
                  onClick={closeOverlay}
                />
              </div>
            ) : (
              <div
                className="w-fit m-5 relative flex justify-center"
                ref={overlayRef}
              >
                <img
                  className="rounded-[15px] max-h-[60vw]"
                  src={selectedItem.src}
                  alt="Not Available"
                ></img>
                <FontAwesomeIcon
                  className="absolute top-[-12px] right-[-12px] shadow-md  hover:bg-gray-100 main-trans text-gray-600 p-[5px] text-[24px] bg-white rounded-full  z-2 cursor-pointer "
                  icon={faXmark}
                  onClick={closeOverlay}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
