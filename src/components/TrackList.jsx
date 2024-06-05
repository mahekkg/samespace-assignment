import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const TrackList = () => {
  const songs = [
    { title: "Starboy", artist: "The Weeknd", duration: "4:16" },
    { title: "Demons", artist: "Imagine Dragons", duration: "5:24" },
    {
      title: "Mouth of the river",
      artist: "Imagine Dragons",
      duration: "6:23",
    },
    { title: "Ghost Stories", artist: "Coldplay", duration: "3:10" },
    { title: "Sparks", artist: "Coldplay", duration: "4:23" },
    { title: "Viva La Vida", artist: "Coldplay", duration: "5:32" },
    { title: "Hymn for the weekend", artist: "Coldplay", duration: "2:23" },
    { title: "Pain", artist: "Ryan Jones", duration: "3:12" },
    { title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
    { title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
    { title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
    { title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
    { title: "Origin", artist: "Imagine Dragons", duration: "3:43" },
  ];

  return (
    <div className="w-1/3  text-white p-6 h-screen flex flex-col">
      <div className="flex gap-4 mb-4">
        <button className="text-xl font-semibold ">For You</button>
        <button className="text-xl">Top Tracks</button>
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Song, Artist"
          className="w-full px-4 py-2 text-sm text-gray-300 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-3">
          <AiOutlineSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-y-auto flex-grow scrollbar-hide">
        {songs.map((song, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <div className="font-bold">{song.title}</div>
              <div className="text-sm text-gray-400">{song.artist}</div>
            </div>
            <div className="text-sm text-gray-400">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
