import  { useState, useEffect, useCallback } from 'react';

import profile_pic from "../assets/profile_image.png";

const GroupCoachingCarousel = () => {
  const coachingCalls = [
    {
      title: "Group Coaching call",
      image: profile_pic,
      description: "Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor....."
    },
    {
      title: "Evening Wellness Call",
      image: profile_pic,
      description: "Different description for the second call. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor....."
    },
    {
      title: "Mindfulness Workshop",
      image: profile_pic,
      description: "Third session description here. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor....."
    },
    {
      title: "Stress Management",
      image: profile_pic,
      description: "Fourth session description here. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Porta praesent eget tortor....."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideInterval = 2000; 

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === coachingCalls.length - 1 ? 0 : prevIndex + 1
    );
  }, [coachingCalls.length]);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? coachingCalls.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-sliding effect
  useEffect(() => {
    let intervalId;
    
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }

    // Cleanup on component unmount or when dependencies change
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, nextSlide]);

  // Mouse event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className=" w-full max-w-xl relative z-30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className="flex flex-col  max-md:ml-0 max-md:w-full font-poppins">
        <div className="flex flex-col md:min-h-[348px] items-center px-6 py-4 mx-auto w-full bg-white border border-[#AC4A78] border-solid rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] ">
          
          <div className="w-full transition-opacity duration-500">
            <h3 className="ml-3 text-lg font-semibold text-zinc-800">
              {coachingCalls[currentIndex].title}
            </h3>
            <div className="flex gap-5 self-stretch mt-5 text-sm font-medium text-zinc-800">
              <img 
                loading="lazy" 
                src={coachingCalls[currentIndex].image} 
                alt="Group coaching call" 
                className="object-contain shrink-0 max-w-full rounded-3xl aspect-[0.82] w-[140px]" 
              />
              <p>{coachingCalls[currentIndex].description}</p>
            </div>
          </div>
          <button className="w-[178px] h-[30px] mt-5 max-w-full text-sm font-semibold text-white bg-[#AC4A78] rounded-[100px] max-md:px-5">
            Join the Session
          </button>
          <div className="flex gap-4 items-start mt-3.5">
            {coachingCalls.map((_, index) => (
              <div 
                key={index} 
                onClick={() => goToSlide(index)}
                className={`flex shrink-0 w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex === index ? 'bg-neutral-400' : 'bg-neutral-300'
                }`} 
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* <button 
        onClick={previousSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 p-2 rounded-full bg-white border border-[#AC4A78] text-[#AC4A78] hover:bg-[#AC4A78] hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-12 p-2 rounded-full bg-white border border-[#AC4A78] text-[#AC4A78] hover:bg-[#AC4A78] hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> */}
    </div>
  );
};

export default GroupCoachingCarousel;