import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../Dashboard";

const RootLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/6 ">
          <Dashboard/>
        </div>
        <div className="w-5/6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
