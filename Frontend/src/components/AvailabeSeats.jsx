import blueheadphone from "../assets/blue-headphone.jpg";
import headphone from "../assets/Headphones.png";

export default function AvailabeSeats() {
  return (
    <div className="flex flex-col justify-between px-6 sm:px-8 md:px-[68px] py-[19px] max-w-[400px] sm:max-w-[450px]  md:max-w-[594px] max-h-[152px] bg-white rounded-[30px] shadow-2xl ">
      <div className="flex justify-between mb-4">
        <div className="flex items-center ">
          <div className="bg-blue-600 font-poppins text-white text-base font-medium w-[160px] md:w-[200px] h-[40px] flex items-center justify-center rounded-full">
            Active Users
          </div>
        </div>
        <div className="flex items-center ">
          <div className="bg-green-600 font-poppins text-white text-base font-medium  w-[160px] md:w-[200px] h-[40px] flex items-center justify-center rounded-full">
            Available seats
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[25px] md:gap-[40px] ml-5">
        <div className="w-[50px] h-[50px]">
          <img src={blueheadphone} alt="" className="object-contain" />
        </div>
        <div className="text-[#0175c4] text-3xl md:text-[40px] font-semibold font-inter">
          320
        </div>
        <div className="w-[50px] h-[50px]">
          <img src={headphone} alt="" className="object-contain" />
        </div>
        <div className="text-3xl md:text-[40px] text-[#4D8E2A]  font-semibold font-inter">
          180
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#4D8E2A"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
