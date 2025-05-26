import { useEffect, useRef, useState } from "react";
import { clients } from "./assets/Data";
import MainTitle from "./MainTitle";

export default function Client() {
  const [sliderActive, setSliderActive] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [smallScreen, setSmallScreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const itemCount = clients.length;
  const visibleItems = smallScreen ? 4 : 2;

  const handleSlider = (index) => {
    const newIndex = (index + itemCount) % itemCount;
    setSliderActive(newIndex);
    updateSliderPosition(newIndex);
  };

  const updateSliderPosition = (index) => {
    const translateX = -index * 100;
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
    setCurrentTranslate(translateX);
    setPrevTranslate(translateX);
  };

  // Touch/click events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    if (
      (sliderActive === visibleItems - 1 && currentX < startX) ||
      (sliderActive === 0 && currentX > startX)
    ) {
      return;
    }
    const diffX = currentX - startX;
    const newTranslate =
      prevTranslate + (diffX / containerRef.current.offsetWidth) * 100;
    setCurrentTranslate(newTranslate);
    sliderRef.current.style.transform = `translateX(${newTranslate}%)`;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine if we should slide to next/prev item
    const movedBy = currentTranslate - prevTranslate;
    if (Math.abs(movedBy) > 10) {
      // Threshold for slide
      const direction = movedBy > 0 ? -1 : 1;
      handleSlider(sliderActive + direction);
    } else {
      // Return to original position
      updateSliderPosition(sliderActive);
    }
  };

  // Circular behavior - clone first and last items for seamless transition
  // const getCircularItems = () => {
  //   if (clients.length < 2) return clients;

  //   return [...clients.slice(-2), ...clients, ...clients.slice(0, 2)];
  // };

  // const circularItems = getCircularItems();

  useEffect(() => {
    const handleScreen = () => {
      updateSliderPosition(sliderActive);
      setTimeout(() => setSmallScreen(window.innerWidth <= 993), 200);
    };

    handleScreen();
    window.addEventListener("resize", handleScreen);

    return () => window.removeEventListener("resize", handleScreen);
  }, [sliderActive]);

  return (
    <section id="client" className="relative w-full bg-bgPrimary">
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="Testimonial" subtitle="Client Speak" />
        <div
          className={` relative p-[20px] h-[400px] select-none overflow-hidden`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <div
            ref={sliderRef}
            className={`absolute left-0 top-0 flex items-center gap-[20px]  w-full h-full main-trans ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {clients.map((c, i) => (
              <div
                key={c.id + i}
                style={{ "--i": i }}
                className={`shrink-0  w-[calc(50%-20px)] max-lg:w-[calc(100%-20px)]  bg-bgSecondary p-[2.5rem] font-Poppins relative  rounded-md`}
              >
                <div className="flex items-center gap-[20px] mb-[20px] ">
                  <img
                    className="rounded-full"
                    src={c.src}
                    alt="Not Available"
                  />
                  <div className="font-Roboto ">
                    <p className="font-bold text-textPrimary mb-[5px] text-[clamp(1rem,.9vw+.4rem,1.25rem)]">
                      {c.name}
                    </p>
                    <p className="font-medium text-textBody text-[clamp(.9rem,1vw+.2rem,1.1rem)]">
                      {c.title}
                    </p>
                  </div>
                </div>
                <p className="text-textPrimary font-medium mb-[20px] leading-[1.8] text-sizeBody">
                  {c.review}
                </p>
                <p className="text-textPrimary border-none text-yellow-500 text-[1.5rem]">
                  {"★".repeat(c.rate)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center relative gap-[10px] w-full mt-[20px]">
          {clients.length / 2 > 0 &&
            Array.from({
              length: smallScreen ? 4 : 2,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleSlider(i)}
                className={`${
                  sliderActive === i
                    ? " border-btnPrimary "
                    : "border-transparent hover:border-btnPrimary"
                } w-[30px] h-[30px] border-[1px] border-solid  rounded-full relative main-trans group`}
              >
                <span
                  className={`
                absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[10px] h-[10px] rounded-full  main-trans group-hover:bg-btnPrimary
                ${sliderActive === i ? "bg-btnPrimary" : "bg-textBody"}
                `}
                ></span>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
