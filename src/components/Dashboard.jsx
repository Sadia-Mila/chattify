
import React from "react";
("use client");
import { FaHome } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import userPhoto from "../assets/userPhoto.png";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <>
     <Sidebar aria-label="Default sidebar example">
        <SidebarItems className="">
          <SidebarItemGroup className="bg-violet-500 h-[924px]">
            <SidebarItem href="#" className="hover:bg-violet-500">
              <img
                src={userPhoto}
                alt="userPhoto"
                className="w-22 rounded-full m-auto mt-8 mb-10 "
              />
            </SidebarItem>
            <SidebarItem className="text-white text-4xl hover:text-violet-500 pl-[35%] mb-10">
              <Link to="/dashboard/home">
                <FaHome />
              </Link>
            </SidebarItem>
            <SidebarItem className="text-white text-4xl hover:text-violet-500 pl-[35%] mb-10">
              <Link to="/dashboard/message">
                <LuMessageCircleMore />
              </Link>
            </SidebarItem>
            <SidebarItem className="text-white text-4xl hover:text-violet-500 pl-[35%] mb-10">
              <Link to="/dashboard/notifications">
                <FaRegBell />
              </Link>
            </SidebarItem>
            <SidebarItem className="text-white text-4xl hover:text-violet-500 pl-[35%] mb-10">
              <Link to="/dashboard/settings">
                <IoSettingsOutline />
              </Link>
            </SidebarItem>
            <SidebarItem className="text-white text-4xl hover:text-violet-500 pl-[35%] mt-15">
              <Link to="/dashboard/logout">
                <GrLogout />
              </Link>
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </>
  )
}

export default Dashboard