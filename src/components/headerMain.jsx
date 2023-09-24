import React from "react";
import { BiHash } from "react-icons/bi";


function HeaderMain() {
  return (
  <div className="h-16 w-screen bg-gray-800 flex items-center justify-between shadow-outline">
    <div className="flex flex-row items-center text-gray-400 text-2xl">
      <BiHash className="ml-3"/>
      <p className="text-2xl font-medium text-blue-500 ml-2">tailwind-css</p>
    </div>
  </div>
  );
}

export default HeaderMain;