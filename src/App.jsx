import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { getApiInstance } from "./constants/constants";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [isTopTracks, setIsTopTracks] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getApiInstance().get("/");
        setSongs(response?.data?.data);
        setFilteredSongs(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchSongs();
  }, []);

  const handleTopTracks = () => {
    setIsTopTracks(true);
    setFilteredSongs(songs.filter((song) => song.top_track));
  };

  const handleForYou = () => {
    setIsTopTracks(false);
    setFilteredSongs(songs);
  };

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredSongs(
      songs.filter(
        (song) =>
          song.name.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row text-white h-screen`}
      style={{
        backgroundColor: currentSong?.accent || "#111827",
      }}
    >
      <Sidebar />
      <div className="w-full lg:w-1/3 text-white px-6 py-2 lg:py-6 lg:h-full flex flex-col bg-gray-800 lg:bg-transparent">
        <div className="flex justify-between items-center lg:justify-start mb-4">
          <div className="flex gap-4">
            <button
              onClick={handleForYou}
              className={`text-xl font-semibold pb-1 ${
                !isTopTracks ? "underline" : ""
              }`}
            >
              For You
            </button>
            <button
              onClick={handleTopTracks}
              className={`text-xl pb-1 ${isTopTracks ? "underline" : ""}`}
            >
              Top Tracks
            </button>
          </div>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu className="text-2xl" />
          </button>
        </div>
        <div
          className={`relative mb-4 ${isOpen ? "block" : "hidden"} lg:block`}
        >
          <input
            type="text"
            placeholder="Search Song, Artist"
            className="w-full px-4 py-2 text-sm text-gray-300 bg-transparent  rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="absolute top-0 right-0 h-full flex items-center pr-3">
            <AiOutlineSearch className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div
          className={`overflow-y-auto flex-grow ${
            isOpen ? "block" : "hidden"
          } lg:block scrollbar-hide`}
        >
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 cursor-pointer"
              onClick={() => handleSongClick(song)}
            >
              <div>
                <div className="font-bold">{song.name}</div>
                <div className="text-sm text-gray-400">{song.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Player
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
