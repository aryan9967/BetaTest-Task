import dashboardlayout from "../assets/Dashboard Layout.png";
import group from "../assets/Group 911.png";
import people from "../assets/People.png";
import bankcards from "../assets/Bank Cards.png";
import Womangroup from "../assets/Add User Group Woman Man.png";
import knowledgeShare from "../assets/Knowledge Sharing.png";
import subscritiom from "../assets/Subscription.png";
import graph from "../assets/Graph Report.png";

function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-[#841A5D] to-[#E1756A] w-[122px] h-[600px] py-2 flex flex-col justify-evenly items-center flex-1 text-white ">
      <button className="bg-[#FF914D] px-9 py-1 rounded-3xl flex justify-center items-center shadow-xl ">
        <div className="items w-[30px] h-[30px]">
          <img src={dashboardlayout} className=" object-cover " alt="" />
        </div>
      </button>

      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={people} className=" object-cover " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={group} className=" object-cover " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={bankcards} className=" object-cover  " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={Womangroup} className=" object-cover " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={knowledgeShare} className=" object-cover  " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={subscritiom} className=" object-cover " alt="" />
        </div>
      </button>
      <button className="hover:bg-[#FF914D] hover:shadow-xl px-9 py-1 rounded-3xl flex justify-center items-center ">
        <div className="items w-[30px] h-[30px]">
          <img src={graph} className=" object-cover" alt="" />
        </div>
      </button>
    </div>
  );
}

export default Sidebar;
