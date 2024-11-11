const CompletedHours = () => {
  const sessions = [
    { name: "8D Sounds", percentage: 85, bgColor: "#AC4A78" },
    { name: "Meditation Music", percentage: 72, bgColor: "#B24763" },
    { name: "Podcasts", percentage: 61, bgColor: "#C65A67" },
    { name: "Guided meditations", percentage: 60, bgColor: "#D86C69" },
  ];

  return (
    <div className=" lg:w-full space-y-8">
      {/* Completed Hours Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-800">Completed hours</h3>
        <div className="relative h-8 rounded-full border border-[#583469] font-poppins">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[#583469]"
            style={{ width: "40%" }}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-[#583469]">
            30:25
          </div>
        </div>
      </div>

      {/* Popular Sessions Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-800">
          Most Popular Sessions
        </h3>
        <div className="">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`relative h-8 rounded-full border mt-${
                index === 0 ? "3.5" : "6"
              }`}
              style={{ borderColor: session.bgColor }}
            >
              <div
                className="absolute left-0 top-0 h-full rounded-full flex items-center justify-between px-4"
                style={{
                  width: `${session.percentage}%`,
                  backgroundColor: session.bgColor,
                }}
              >
                <span className="text-xs font-poppins font-semibold text-white ">
                  {session.name}
                </span>
                <span className="text-sm font-poppins font-semibold text-white ">
                  {session.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedHours;
