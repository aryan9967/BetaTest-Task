import { useState } from "react";
import logo from "../assets/logo.png";
import notification from "../assets/Notification.png";
import MobileNavbar from "./MobileNavbar";

export default function MobileHeader() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="mobile_header_container md:hidden">
      <div className="mobile_header  flex justify-between">
        <div className="logo md:hidden  relative z-10">
          <div className="logo_container flex relative">
            <img src={logo} className="object-cover h-[220px]" alt="" />
            <div className="mt-24 absolute left-[130px] top-1 w-[222px] self-start text-zinc-800 ">
              <div className="relative mb-[10px]">
                <h1 className=" font-[Chilanka] text-[22px] max-lg:text-sm relative z-10">
                  Good morning Jane!
                </h1>
              </div>
              <div>
                <p className="font-[Chilanka] text-[22px] max-lg:text-sm">
                  Your attitude determines your direction Choose positivity and
                  watch your life transform
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-14 mr-4">
          <button className=" bg-transparent border-none focus:outline-none">
            <img
              loading="lazy"
              src={notification}
              alt="Notification icon"
              className="object-cover w-[30px]"
            />
          </button>

          <button className="md:hidden" onClick={() => setNavbar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <h2 className="self-start text-xl font-[Poppins] pl-3  font-semibold text-zinc-800">
          Dashboard
        </h2>
        <div className="absolute bottom-0 -left-5 w-[150px] h-[2px] bg-[#9A4D77] z-20" />
      </div>
      <MobileNavbar setNavbar={setNavbar} navbar={navbar}/>
    </div>
  );
}
