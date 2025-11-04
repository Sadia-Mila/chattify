import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import friendsReunion from "../../assets/friendReunion.png";
import friendsForever from "../../assets/friendsForever.png";
import crazyCousins from "../../assets/crazyCousins.png";
import friend1 from "../../assets/firends1.png";
import friend2 from "../../assets/friends2.png";
import friend3 from "../../assets/friends3.png";
import friend4 from "../../assets/friends4.png";
import friend5 from "../../assets/friends5.png";

const DashboardHome = () => {
  return (
    <>
      <div className="py-4 h-full">
        <div className="flex flex-wrap gap-x-6 gap-y-6 ">
          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex gap-x-8 relative ">
              <input
                type="search"
                placeholder="search"
                className="py-2 px-10 w-full bg-gray-200 rounded-lg drap-shadow-lg"
              />
              <FaSearch className="absolute top-3 left-4 " />
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5]" />
            </div>
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">
                Groups List
              </h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5]" />
            </div>
            <div className="flex justify-between items-center">
              <img src={friendsReunion} alt="" />
              <div className="flex flex-col ">
                <h4 className="font-Poppins font-semibold text-[18px] text-black">
                  Friends Reunion
                </h4>
                <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                  Hi Guys, Wassup!
                </h6>
              </div>
              <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                Join
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <img src={friendsForever} alt="" />
              <div className="flex flex-col ">
                <h4 className="font-Poppins font-semibold text-[18px] text-black">
                  Friends Reunion
                </h4>
                <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                  Hi Guys, Wassup!
                </h6>
              </div>
              <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                Join
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <img src={crazyCousins} alt="" />
              <div className="flex flex-col ">
                <h4 className="font-Poppins font-semibold text-[18px] text-black">
                  Friends Reunion
                </h4>
                <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                  Hi Guys, Wassup!
                </h6>
              </div>
              <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                Join
              </button>
            </div>
          </div>
          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">
                Friends
              </h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5] text-lg" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend1} alt="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Raghav
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Dinner?
                  </h6>
                </div>
              </div>
              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 8:56pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 relative">
                <img src={friend2} alt="friend2" className="" />
                <div className="w-4.5 h-4.5 rounded-full border-3 border-white bg-[#00FF75] absolute bottom-0 left-9 shadow-2xl"></div>
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Swathi
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Sure!
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 2:45pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend3} alt="friend3" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Kiran
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Whats up?
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Yesterday, 6:22pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend4} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Tejeshwini C
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    I will call him today.
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 8:56pm
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">
                User List
              </h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5] text-lg" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend1} alt="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Raghav
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>
              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                +
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 ">
                <img src={friend2} alt="friend2" className="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Swathi
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 2:45pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                +
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend3} alt="friend3" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Kiran
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Yesterday, 6:22pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                +
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend4} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Tejeshwini C
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                +
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend5} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Marvin McKinney
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                +
              </button>
            </div>
          </div>

          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">
                Friend Request
              </h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5] text-lg" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend1} alt="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Raghav
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Dinner?
                  </h6>
                </div>
              </div>
              <div className="">
                <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                  Accept
                </button>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 ">
                <img src={friend2} alt="friend2" className="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Swathi
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Sure!
                  </h6>
                </div>
              </div>

              <div className="">
                <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                  Accept
                </button>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend3} alt="friend3" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Kiran
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Whats up?
                  </h6>
                </div>
              </div>

              <div className="">
                <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                  Accept
                </button>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend4} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Tejeshwini C
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    I will call him today.
                  </h6>
                </div>
              </div>

              <div className="">
                <button className="py-2 px-5 bg-[#5F35F5] font-Poppins font-semibold text-[20px] text-white rounded-xl">
                  Accept
                </button>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">Groups</h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5] text-lg" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend1} alt="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Raghav
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Dinner?
                  </h6>
                </div>
              </div>
              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 8:56pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 relative">
                <img src={friend2} alt="friend2" className="" />
                <div className="w-4.5 h-4.5 rounded-full border-3 border-white bg-[#00FF75] absolute bottom-0 left-9 shadow-2xl"></div>
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Swathi
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Sure!
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 2:45pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend3} alt="friend3" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Kiran
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    Whats up?
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Yesterday, 6:22pm
                </h4>
              </div>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend4} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Tejeshwini C
                  </h4>
                  <h6 className="font-Poppins font-medium text-sm text-[#4D4D4D] opacity-75">
                    I will call him today.
                  </h6>
                </div>
              </div>

              <div className="">
                <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                  Today, 8:56pm
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[450px] border shadow-2xl p-6 rounded-2xl">
            <div className="flex justify-between relative mt-4 mb-4">
              <h4 className="font-Poppins font-semibold text-[20px]">
                User List
              </h4>
              <BsThreeDotsVertical className="absolute top-3 right-4 text-[#5F35F5] text-lg" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend1} alt="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Raghav
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>
              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                Unblock
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 ">
                <img src={friend2} alt="friend2" className="" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Swathi
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 2:45pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                Unblock
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend3} alt="friend3" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Kiran
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Yesterday, 6:22pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                Unblock
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend4} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Tejeshwini C
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                Unblock
              </button>
            </div>
            <hr className="h-0.5 bg-[#000000] opacity-25 mt-2 mb-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2">
                <img src={friend5} alt="friends4" />
                <div className="flex flex-col ">
                  <h4 className="font-Poppins font-semibold text-[18px] text-black">
                    Marvin McKinney
                  </h4>
                  <h4 className="font-Poppins font-medium text-[10px] text-black opacity-50">
                    Today, 8:56pm
                  </h4>
                </div>
              </div>

              <button className="py-2 px-4 bg-[#5F35F5] text-white font-Poppins font-semibold text-[20px] rounded-lg">
                Unblock
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
