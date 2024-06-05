import React from "react";



function Sidebar() {
  return (
    <div className="w-1/6 p-5 flex flex-col justify-between">
      <div>
        <div className="text-2xl mb-4">Spotify</div>
      </div>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          {/* <div className="font-bold">Profile Name</div>
          <div className="text-sm text-gray-400">View Profile</div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
