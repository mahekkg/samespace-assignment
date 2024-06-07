import React from "react";
import { FaSpotify, FaUserAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-full lg:w-1/6 p-5 flex lg:flex-col justify-between bg-gray-900 lg:bg-transparent">
      <div className="flex justify-between  lg:flex-col flex-row">
        <div className="flex items-center mb-4 lg:mb-10">
          <FaSpotify className="text-3xl text-green-500 mr-2" />
          <div className="text-2xl font-bold text-white">Spotify</div>
        </div>
      </div>
      <div className={`flex items-center lg:flex text-gray-500`}>
        <FaUserAlt className="text-2xl" />
      </div>
    </div>
  );
}

export default Sidebar;
