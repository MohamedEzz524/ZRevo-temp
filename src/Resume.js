import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "./MainTitle";
import { resume, skills } from "./assets/Data";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Resume() {
  const skillsRef = useRef(null); //resume section reference
  const animationStartedRef = useRef(false);
  const [bars, setBars] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStartedRef.current) {
            animationStartedRef.current = true;
            animateBars();
          }
        });
      },
      { threshold: 0.45 }
    ); // Trigger when 80% of element is visible

    const currentSkillsRef = skillsRef.current;
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }
    return () => {
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  const animateBars = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now(); // zy date.now()

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setBars(
        skills.map((skill) => {
          return Math.floor(progress * skill.per);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="resume" className="relative w-full bg-bgPrimary">
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="Summary" subtitle="Resume" />
        <div className="grid grid-cols-2 gap-[50px] font-Poppins w-full xl:w-[90%] xl:m-auto">
          <div className="col-span-1 max-md:col-span-2  ">
            <h3 className="mb-[20px] text-textPrimary font-Roboto font-medium text-[clamp(1.375rem,2vw+0.5rem,2rem)] ">
              My Education
            </h3>
            {resume.education.map(({ duration, course, source, desc }, i) => (
              <div
                key={i}
                className="bg-borderBg  border-[1px] border-borderPrimary rounded-[5px] p-[20px] max-sm:p-[10px]  mb-[20px] text-[clamp(.9rem,1vw+.2rem,1.1rem)]  "
              >
                <div className="px-[5px] bg-btnPrimary text-white mb-[20px] w-fit rounded-[5px]">
                  {duration}
                </div>
                <div className="font-medium text-[clamp(1.25rem,1vw+.5rem,1.5rem)] text-textPrimary mb-[15px]">
                  {course}
                </div>
                <div className="mb-[20px] text-textCompany ">{source}</div>
                <div className="text-textBody leading-[1.6] max-md:text-balance">
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1 max-md:col-span-2 ">
            <h3 className="mb-[20px] text-textPrimary font-Roboto font-medium text-[clamp(1.375rem,2vw+0.5rem,2rem)]">
              My Experience
            </h3>
            {resume.experience.map(({ duration, job, company, desc }, i) => (
              <div
                key={i}
                className="bg-borderBg border-[1px] border-borderPrimary rounded-[5px] p-[20px] mb-[20px] text-[clamp(.9rem,1vw+.2rem,1.1rem)] "
              >
                <div className="px-[5px] bg-btnPrimary text-white mb-[20px] w-fit rounded-[5px]">
                  {duration}
                </div>
                <div className="font-medium text-[clamp(1.25rem,1vw+.5rem,1.5rem)] text-textPrimary mb-[15px]">
                  {job}
                </div>
                <div className="mb-[20px] text-textCompany ">{company}</div>
                <div className="text-textBody leading-[1.6] max-md:text-balance">
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-2 font-Roboto" ref={skillsRef}>
            <h3 className="mb-[20px]  font-bold  text-textPrimary text-[clamp(1.375rem,1.4vw+.4rem,1.75rem)]">
              My Skills
            </h3>
            <div className="grid grid-cols-2 gap-[50px] max-md:gap-[30px]">
              {skills.map(({ skill, per }, i) => (
                <div key={i} className="col-span-1 max-md:col-span-2">
                  <div className="text-textPrimary flex justify-between mb-[10px] text-[clamp(1rem,1vw+.2rem,1.5rem)] font-medium">
                    <h4>{skill}</h4>
                    <div className="">{bars[i]}%</div>
                  </div>
                  <div className="relative w-full h-[10px] bg-borderPrimary rounded-l-full">
                    <div
                      style={{ width: `${bars[i]}%` }}
                      className={`absolute left-0 bottom-0 bg-btnPrimary h-full rounded-l-full`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/"
              className="cursor-pointer block w-fit mt-[70px] mx-auto text-textBody  border-[1px] border-textBody hover:bg-textBody hover:text-white px-[30px] py-[10px] rounded-[50px] main-trans"
            >
              Download CV
              <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
