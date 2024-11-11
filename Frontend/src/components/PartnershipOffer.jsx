import React from "react";
import offer_img from "../assets/offer.png";

function PartnershipOffer({ title, description }) {
  return (
    <div className="flex flex-col  h-[300px] justify-center font-poppins px-4 w-full text-base md:text-lg border-2 border-[#AC4A78] border-dashed bg-zinc-100 rounded-[20px] md:rounded-[30px] max-w-lg md:max-w-full mx-auto">
      <h3 className="self-start text-base md:text-lg font-semibold text-zinc-800">
        {title}
      </h3>
      <div className="flex flex-row gap-5 mt-5 font-medium">
        <img
          loading="lazy"
          src={offer_img}
          alt="Partnership offer"
          className="object-contain max-w-full rounded-xl aspect-[0.82] w-[146px] mx-auto md:mx-0"
        />
        <div className="flex flex-col flex-wrap justify-between overflow-hidden">
          <div>
            <p className="text-zinc-800 break-words overflow-hidden" style={{ wordBreak: "break-word" }}>
              {description}
            </p>
            <a
              href="http://www.website.com"
              className="mt-2 text-blue-600 underline break-words overflow-hidden"
              style={{ wordBreak: "break-word" }}
            >
              www.website.com
            </a>  
          </div>

          <button className="self-center md:self-start px-4 py-2  text-sm font-semibold text-white bg-[#583469] rounded-full">
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartnershipOffer;
