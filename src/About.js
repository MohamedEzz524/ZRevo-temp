import { useState, useRef, useEffect } from "react";
import MainTitle from "./MainTitle";

const myAbout = [
  { data: "Name", value: "Mohamed ElSayed" },
  { data: "Email", value: "moelsayed524@gmail.com" },
  { data: "Age", value: "24" },
  { data: "From", value: "10th of Ramadan, Egypt" },
];

const brands = [
  { name: "Years Experience", average: "10" },
  { name: "Happy Clients", average: "250" },
  { name: "Projects Done", average: "650" },
  { name: "Get Awards", average: "38" },
];

export default function About() {
  const [counters, setCounters] = useState(brands.map(() => 0)); // initialize counters to 0
  const aboutRef = useRef(null); //about section reference
  const animationStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStartedRef.current) {
            animationStartedRef.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.4 } // Trigger when 90% of element is visible
    );

    const currentAboutRef = aboutRef.current;
    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now(); // zy date.now()

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounters(
        brands.map((brand) => {
          return Math.floor(progress * brand.average);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="about" className="relative w-full bg-bgPrimary">
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="ABOUT ME" subtitle="Know Me More" />
        <div className="grid grid-cols-5 gap-7 font-Poppins w-full xl:w-[90%] m-auto ">
          <div className="lg:col-span-3 lg:text-left px-[10px] col-span-5 text-center  max-sm:px-0">
            <h3 className="text-textPrimary text-[clamp(1.75rem,1.5vw+.5rem,2.5rem)] mb-[10px] font-Roboto font-bold">
              I'm <span className="text-btnPrimary">Mohamed ElSayed,</span> a
              Web Developer
            </h3>
            <div className=" text-textBody text-[clamp(1rem,1vw+.2rem,1.5rem)] leading-[1.8] max-sm:text-balance ">
              <p className="mb-[10px]">
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="mb-[10px]">
                Delivering work within time and budget which meets client’s
                requirements is our moto. Lorem Ipsum has been the industry's
                standard dummy text ever when an unknown printer took a galley.
                Lorem Ipsum has been the industry's standard dummy text ever
                when an unknown printer took a galley.
              </p>
            </div>
          </div>
          <ul className="px-[10px] max-sm:px-0 col-span-5 lg:col-span-2  text-[clamp(1rem,1vw+.2rem,1.5rem)] text-left  ">
            {myAbout.map(({ data, value }) => (
              <li
                key={data}
                className="p-[12px] w-full border-b-[1px] border-textTitle text-textSecondary"
              >
                <span className="font-Roboto font-bold  ">{data}:</span>{" "}
                {data === "Email" ? (
                  <a
                    href="mailto:moelsayed524@gmail.com?subject=Contact"
                    className="text-btnPrimary hover:text-btnSecondary main-trans"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </li>
            ))}
            <li className="mt-[20px] max-sm:text-center">
              <a
                href="/"
                className="cursor-pointer inline-block text-center rounded-[50px] text-white px-[30px] py-[14px] bg-btnPrimary hover:bg-btnSecondary main-trans"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-8 mt-[40px] font-Roboto" ref={aboutRef}>
          {brands.map(({ name, average }, i) => (
            <div
              key={name}
              className="col-span-2 py-[20px] px-[10px] text-center border-[1px] border-dotted border-borderPrimary max-md:col-span-4"
            >
              <div className="text-textBody font-bold text-[clamp(2rem,3vw+.5rem,4rem)]">
                {counters[i]} +
              </div>
              <div className="text-textSecondary font-Poppins font-normal text-[clamp(1rem,1vw+.3rem,2rem)]">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
