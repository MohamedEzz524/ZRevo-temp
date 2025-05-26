import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
  const [showOverlay, setSHOWOverlay] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const popupRef = useRef(null);

  const openTerms = () => {
    setShowTerms(true);
    setSHOWOverlay(true);
    document.body.style.overflow = "hidden";
  };
  const openDisclaimer = () => {
    setShowDisclaimer(true);
    setSHOWOverlay(true);
    document.body.style.overflow = "hidden";
  };
  const closeOverlay = () => {
    setShowTerms(false);
    setShowDisclaimer(false);
    setSHOWOverlay(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (!popupRef.current) return;
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeOverlay();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className=" bg-bgPrimary w-full relative">
      <div className="container m-auto px-[30px] h-[200px] content-center  max-md:px-[10px]  text-textPrimary">
        <div className="flex justify-between items-center py-[20px] font-Poppins relative max-lg:flex-col max-lg:gap-[10px]">
          <p className="text-sizeBody text-center">
            Copyright © 2025{" "}
            <a
              href="#home"
              className="text-btnPrimary font-medium hover:text-btnSecondary main-trans"
            >
              MoSayed
            </a>{" "}
            All rights reserved.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={openTerms}
              className="hover:text-btnSecondary main-trans"
            >
              Terms & Policy
            </button>
            <span>|</span>
            <button
              onClick={openDisclaimer}
              className="hover:text-btnSecondary main-trans"
            >
              Disclaimer
            </button>
          </div>
        </div>
        {/* overlay for terms and disclaimer */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] overflow-y-auto">
            <div className="flex justify-center items-start  min-h-screen ">
              <div
                ref={popupRef}
                className="bg-bgPrimary rounded shadow-lg w-[60%] max-md:w-[90%] mt-[30px] max-md:mt-[10px] font-Poppins font-normal leading-[1.8] animate-fadeBottom relative   "
              >
                {showTerms && (
                  <div>
                    <h2 className="font-Roboto font-medium text-sizeSubtitle  px-[20px] py-[15px] border-b border-borderPrimary">
                      Terms & Policy
                    </h2>
                    <div className="p-[20px]">
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                      <h1 className="text-sizeTitle mb-[20px] font-Roboto font-medium">
                        Terms of Use
                      </h1>
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. Simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <h4 className="text-textPrimary text-[clamp(1.1rem,1vw+.3rem,1.375rem)] font-medium mb-[5px]">
                        Part I – Information MoSayed collects and controls
                      </h4>
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                      <h4 className="text-textPrimary text-[clamp(1.1rem,1vw+.3rem,1.375rem)] font-medium mb-[5px]">
                        Part II – Information that MoSayed processes on your
                        behalf
                      </h4>
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                      <h4 className="text-textPrimary text-[clamp(1.1rem,1vw+.3rem,1.375rem)] font-medium mb-[5px]">
                        Part III – General
                      </h4>
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                      <h1 className="text-sizeTitle mb-[20px] font-Roboto font-medium">
                        Privacy Policy
                      </h1>
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <ol className="list-decimal list-inside mb-[20px] text-textSecondary text-[clamp(.9rem,.9vw+.22rem,1.1rem)] px-[20px]">
                        <li className="mb-[10px]">
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Quidam lisque persius interesset his et, Lisque
                          persius interesset his et, in quot quidam persequeris
                          vim, ad mea essent possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          In quot quidam persequeris vim, ad mea essent possim
                          iriure. Quidam lisque persius interesset his et.
                        </li>
                        <li className="mb-[10px]">
                          lisque persius interesset his et, Lisque persius
                          interesset his et.
                        </li>
                        <li className="mb-[10px]">
                          Quidam Interesset his et, Lisque persius interesset
                          his et, in quot quidam persequeris vim, ad mea essent
                          possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Persius interesset his et, Lisque persius interesset
                          his et, in quot quidam persequeris vim, ad mea essent
                          possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Quot quidam persequeris vim Quidam lisque persius
                          interesset his et, Lisque persius interesset his et,
                          in quot quidam persequeris vim, ad mea essent possim
                          iriure.
                        </li>
                      </ol>
                    </div>
                  </div>
                )}
                {showDisclaimer && (
                  <div>
                    <h2 className="font-Roboto font-medium text-sizeSubtitle  px-[20px] py-[15px] border-b border-gray-300">
                      Copyright & Disclaimer
                    </h2>
                    <div className="p-[20px]">
                      <p className="mb-[20px] text-textSecondary text-[clamp(1rem,.9vw+.25rem,1.2rem)] ">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                      <ol className="list-disc list-inside mb-[20px] text-textSecondary text-[clamp(.9rem,.9vw+.22rem,1.1rem)] px-[20px]">
                        <li className="mb-[10px]">
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Quidam lisque persius interesset his et, Lisque
                          persius interesset his et, in quot quidam persequeris
                          vim, ad mea essent possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          In quot quidam persequeris vim, ad mea essent possim
                          iriure. Quidam lisque persius interesset his et.
                        </li>
                        <li className="mb-[10px]">
                          lisque persius interesset his et, Lisque persius
                          interesset his et.
                        </li>
                        <li className="mb-[10px]">
                          Quidam Interesset his et, Lisque persius interesset
                          his et, in quot quidam persequeris vim, ad mea essent
                          possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Persius interesset his et, Lisque persius interesset
                          his et, in quot quidam persequeris vim, ad mea essent
                          possim iriure.
                        </li>
                        <li className="mb-[10px]">
                          Quot quidam persequeris vim Quidam lisque persius
                          interesset his et, Lisque persius interesset his et,
                          in quot quidam persequeris vim, ad mea essent possim
                          iriure.
                        </li>
                      </ol>
                    </div>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faClose}
                  size="xl"
                  onClick={closeOverlay}
                  className="absolute top-5 right-4 text-textBody cursor-pointer hover:text-textPrimary transition duration-300"
                >
                  Close
                </FontAwesomeIcon>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
