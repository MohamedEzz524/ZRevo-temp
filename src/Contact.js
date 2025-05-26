import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contact, follow } from "./assets/Data";
import MainTitle from "./MainTitle";
import LinkComponent from "./LinkComponent";
import Label from "./Label";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
//form
import { useForm } from "@formspree/react";
import { useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzerjze");
  const [messageSent, setMessageSent] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    handleSubmit(e);
    setTimeout(() => {
      setMessageSent(false);
      setUser({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full bg-bgSecondary">
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="Contact" subtitle="Get in Touch" />
        <div className="grid grid-cols-12 max-md:flex max-md:flex-col-reverse max-md:text-center pt-[30px]">
          <div className="col-span-4 font-Poppins  max-md:mt-[50px]">
            <h3 className="text-sizeSubtitle font-medium text-textPrimary mb-[15px]">
              ADDRESS
            </h3>
            <p className="text-sizeBody text-textSecondary mb-[15px]">
              4th Floor, Plot No.22,
              <br />
              145 Murphy Canyon Rd.
              <br />
              San Diego CA 2028.
            </p>
            <ul className="text-sizeBody text-textSecondary mb-[15px] max-md:mt-[20px]">
              <li className="mb-[15px] flex items-center max-md:justify-center">
                <a
                  href="https://wa.link/70vvpb"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-[5px]"
                >
                  <FontAwesomeIcon
                    className="text-btnPrimary mr-[5px] "
                    icon={faWhatsapp}
                    size="lg"
                  />
                  Whatsapp
                </a>{" "}
                |{" "}
                <a
                  href="https://t.me/+201033866796"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-btnPrimary mx-[5px]"
                    icon={faTelegram}
                    size="lg"
                  />{" "}
                </a>
                Telegram
              </li>
              {contact.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center mb-[15px] max-md:justify-center"
                >
                  <span>
                    <FontAwesomeIcon
                      className="text-btnPrimary mr-[10px]"
                      icon={c.icon}
                      size="lg"
                    />
                    {c.value}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="text-sizeSubtitle text-textPrimary font-medium mb-[15px] max-md:mt-[30px]">
                FOLLOW ME
              </h3>
              <ul className="flex items-center gap-[5px] max-md:justify-center">
                {follow.map((f, i) => (
                  <li
                    key={i}
                    className="flex relative group items-center mb-[15px] "
                  >
                    <LinkComponent
                      icon={f.icon}
                      link={f.link}
                      color={f.color}
                      size="lg"
                    />

                    <Label text={f.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-8 px-[10px] font-Poppins">
            <h3 className=" text-sizeSubtitle  text-textPrimary font-medium mb-[15px]">
              SEND ME A NOTE
            </h3>
            <form
              className="flex flex-col gap-[15px]"
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Your Name"
                required
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="bg-bgPrimary text-textSecondary border border-borderPrimary rounded-[5px] p-[10px] focus:outline-none focus:border-cyan-300  "
              />

              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Your Email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="bg-bgPrimary text-textSecondary border border-borderPrimary rounded-[5px] p-[10px] focus:outline-none focus:border-cyan-300"
              />
              <textarea
                rows={5}
                name="message"
                value={user.message}
                required
                placeholder="Tell me about your project"
                onChange={(e) => setUser({ ...user, message: e.target.value })}
                className="bg-bgPrimary text-textSecondary border border-borderPrimary rounded-[5px] p-[10px] focus:outline-none focus:border-cyan-300"
              ></textarea>
              {messageSent && (
                <p className="text-center content-center h-[50px]  text-btnSecondary bg-[rgba(0,255,0,.6)] mb-[15px] rounded-lg animate-fadeOutMsg">
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-[5px]" />
                  Your message has been sent successfully!
                </p>
              )}
              <button
                type="submit"
                disabled={state.submitting}
                className={`bg-btnPrimary text-white w-fit m-auto py-[12px] px-[30px] rounded-[50px] hover:bg-btnSecondary main-trans ${
                  messageSent && "bg-blue-600 cursor-not-allowed"
                }`}
              >
                Send Message{" "}
                {messageSent && <span className="animate-pulse">. . .</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-bgPrimary"></footer>
    </section>
  );
}
