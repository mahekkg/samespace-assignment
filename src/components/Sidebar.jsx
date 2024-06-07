import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:w-1/6 p-5 flex lg:flex-col justify-between bg-gray-900 lg:bg-transparent">
      <div className="flex justify-between  lg:flex-col flex-row">
        <div className="flex items-center mb-4 lg:mb-10">
          <FaSpotify className="text-3xl text-green-500 mr-2" />
          <div className="text-2xl font-bold text-white">Spotify</div>
        </div>
      </div>
      <div className={`flex items-center lg:flex`}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        {/* <div>
          <div className="font-bold">Profile Name</div>
          <div className="text-sm text-gray-400">View Profile</div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
