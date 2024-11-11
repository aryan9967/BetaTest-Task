import notification from "../assets/Notification.png";
import settings from "../assets/Settings.png";
import logout from "../assets/Logout.png";
import profile from "../assets/profile_image.png";


function Header() {
  return (
    <header className="flex justify-between gap-5 max-md:hidden  w-full max-w-full ">
      
      <div className="flex max-md:hidden flex-col ml-3  self-start text-zinc-800 ">
        <div className="relative mb-[18px]">
          <h1 className=" font-[Chilanka] text-[22px] max-lg:text-sm relative z-10">
            Good morning Jane!
          </h1>

          <div className="absolute bottom-0  w-[300px] h-[2px] bg-[#EA7C51] z-20" />
        </div>
        <div>
          <p className="font-[Chilanka] text-[22px] max-lg:text-sm">
            Your attitude determines your direction.<br></br> Choose positivity
            and watch your life transform
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between max-md:mt-14 max-md:mr-4">
        <div className="flex gap-5 max-md:justify-end">
          <button className=" bg-transparent border-none focus:outline-none">
            <img
              loading="lazy"
              src={notification}
              alt="Notification icon"
              className="object-contain w-[30px]"
            />
          </button>

          <button className="max-md:hidden bg-transparent border-none focus:outline-none">
            <img
              loading="lazy"
              src={settings}
              alt="Settings icon"
              className="object-contain aspect-square w-[30px]"
            />
          </button>

          <button className="max-md:hidden bg-transparent border-none focus:outline-none">
            <img
              loading="lazy"
              src={logout}
              alt="User profile icon"
              className="object-contain aspect-square w-[30px]"
            />
          </button>

          <button className="md:hidden">
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

          <div className=" max-md:hidden flex shrink-0 w-10 h-10 rounded-full bg-zinc-300 shadow-[0px_0px_20px_rgba(131,76,201,0.5)] ">
            <img
              loading="lazy"
              src={profile}
              alt="User profile icon"
              className="object-cover h-ful w-full rounded-full"
            />
          </div>
        </div>
        <div className="relative max-md:hidden">
          <h2 className="self-start text-xl lg:text-2xl font-[Poppins] pl-3  text-2 font-semibold text-zinc-800">
            Dashboard
          </h2>
          <div className="absolute bottom-0 -left-5 w-[280px] h-[2px] bg-[#9A4D77] z-20" />
        </div>
      </div>
    </header>
  );
}

export default Header;
