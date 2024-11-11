import React from "react";
import playbtn from "../assets/playbtn.png";

function RoutineSuggestion({ image, period, routineItems }) {
  return (
    <section className="w-full">
      <div className="font-poppins flex overflow-hidden flex-col items-center px-11 pt-4 pb-7 w-full bg-white border border-pink-600 border-solid rounded-[30px] ">
        <img
          loading="lazy"
          src={image}
          alt="Morning routine icon"
          className="object-contain aspect-square rounded-full w-[70px]"
        />
        <h4 className="text-base font-semibold text-zinc-800">{period}</h4>
        <div className="flex justify-between w-full mt-6 text-sm font-medium">
          <div className="flex flex-col flex-1 text-zinc-800 text-sm">
            {routineItems?.map((item, itemIndex) => (
              <div
                key={`item-${itemIndex}`}
                className={` ${itemIndex == 1 ? "mt-4" : ""} name_group `}
              >
                {item.name.map((actItem, actIndex) => (
                  <li key={`act-${itemIndex}-${actIndex}`}>{actItem}</li>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between text-orange-500 whitespace-nowrap">
            {routineItems?.map((item, index) => (
              <div
                key={`duration-${index}`}
                className={`flex  justify-between ${index == 1 ? "mb-4" : ""} `}
              >
                <div className="mr-8">{item.duration}</div>
                <button>
                  <img
                    loading="lazy"
                    src={playbtn}
                    alt="Play button"
                    className="object-contain shrink-0 w-6 rounded-none aspect-square"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoutineSuggestion;
