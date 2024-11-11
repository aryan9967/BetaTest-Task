// MobileNavbar.js
import React from "react";
import dashboardlayout from "../assets/Dashboard Layout.png";
import group from "../assets/Group 911.png";
import people from "../assets/People.png";
import bankcards from "../assets/Bank Cards.png";
import Womangroup from "../assets/Add User Group Woman Man.png";
import knowledgeShare from "../assets/Knowledge Sharing.png";
import subscritiom from "../assets/Subscription.png";
import graph from "../assets/Graph Report.png";

export default function MobileNavbar({ setNavbar, navbar }) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 bg-gradient-to-b from-[#841A5D] to-[#E1756A] w-[126px] h-[100vh] flex flex-col justify-center
        transform transition-transform duration-300 ease-in-out
        ${navbar ? "translate-x-0" : "translate-x-full"}`}
    >
      <button className="mt-5 ml-3" onClick={() => setNavbar(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      <div className="py-2 flex flex-1 flex-col justify-evenly items-center text-white">
        <button className="bg-[#FF914D] px-9 py-1 rounded-3xl flex justify-center items-center shadow-xl">
          <div className="w-[30px] h-[30px]">
            <img src={dashboardlayout} className="object-cover" alt="Dashboard" />
          </div>
        </button>

        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={people} className="object-cover" alt="People" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={group} className="object-cover" alt="Group" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={bankcards} className="object-cover" alt="Bank Cards" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={Womangroup} className="object-cover" alt="Woman Group" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={knowledgeShare} className="object-cover" alt="Knowledge Share" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={subscritiom} className="object-cover" alt="Subscription" />
          </div>
        </button>
        <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center">
          <div className="w-[30px] h-[30px]">
            <img src={graph} className="object-cover" alt="Graph" />
          </div>
        </button>
      </div>
    </div>
  );
}
