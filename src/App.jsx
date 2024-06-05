import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainContent from "./components/TrackList";

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <Sidebar />
      <MainContent />
      <Player />
    </div>
  );
}

export default App;
