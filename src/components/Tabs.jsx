import React from 'react';

const Tabs = () => {
  return (
    <div className="flex mb-4">
      <button className="px-4 py-2 mr-2 text-gray-700 font-bold rounded-lg active:bg-gray-200 active:text-black">For You</button>
      <button className="px-4 py-2 text-gray-700 font-bold rounded-lg hover:bg-gray-200">Top Tracks</button>
    </div>
  );
};

export default Tabs;
