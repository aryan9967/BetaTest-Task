import React from "react";
import Slider from "react-slick";
import PartnershipOffer from "./PartnershipOffer";

export default function SimpleSlider() {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 2000,  
    arrows: false,        
  };

  const partnershipOffers = [
    { id: 1, title: "Special Partnership offer", description: "10% OFF in all wellness product" },
    { id: 2, title: "Special Collabaration offer", description: "30% OFF on Subscription" },
    { id: 3, title: "Paid Collabaration offer", description: "20% OFF on Subscription" },
  ];

  return (
    <div className="w-full max-sm:max-w-[350px] max-md:max-w-[400px] rounded-[30px] max-w-md mx-auto">
      <Slider {...settings} className=" rounded-[30px] shadow-[0px_10px_20px_rgba(0,0,0,0.25)]">
        {partnershipOffers.map((offer) => (
          <PartnershipOffer
            key={offer.id}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </Slider>
    </div>
  );
}
