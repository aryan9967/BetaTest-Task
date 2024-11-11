import profile_pic from "../assets/profile_image.png"


function GroupCoachingCall() {
  return (
    <section className="flex flex-col  md:max-h-[346px]  max-md:ml-0 max-md:w-full font-poppins">
      <div className="flex flex-col items-center px-6 py-4 mx-auto w-full bg-white border border-[#AC4A78] border-solid rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-7">
        <h3 className="ml-3 text-lg font-semibold text-zinc-800">
          Group Coaching Call
        </h3>
        <div className="flex gap-5 self-stretch mt-5 text-sm font-medium text-zinc-800">
          <img loading="lazy" src={profile_pic} alt="Group coaching call" className="object-fit shrink-0 max-w-full rounded-3xl aspect-[0.82] w-[100px]" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor Lorem ipsum dolor sit amet consectetur. Porta praesent eget tortor
            Porta praesent eget tortor.....
          </p>
        </div>
        <button className=" w-[178px] h-[30px] mt-5 max-w-full text-sm font-semibold text-white bg-[#AC4A78] rounded-[100px]  max-md:px-5">
          Join the Session
        </button>
        
      </div>
    </section>
  );
}

export default GroupCoachingCall;