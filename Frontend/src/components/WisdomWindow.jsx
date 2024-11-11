import React from "react";
import PartnershipOffer from "./PartnershipOffer";
import VideoSection from "./VideoSection";
import PartnershipCarousel from "./PartnershipCarousel";

function WisdomWindow() {
  return (
    <section className="xl:h-1/2  max-lg:flex max-lg:flex-col max-lg:items-center">
      <div className="max-sm:max-w-[350px] max-md:max-w-[400px] max-lg:max-w-[500px]">
        <h3 className="self-start  text-lg font-semibold text-black">
          Wisdom Window
        </h3>
        <div className="act_content mt-2 grid md:grid-cols-1 xl:grid-cols-2 gap-10">
          <VideoSection />
          <PartnershipCarousel />
        </div>
      </div>
    </section>
  );
}

export default WisdomWindow;
