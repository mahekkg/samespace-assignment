import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Tabs from "./components/Tabs";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto px-4 pb-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <UserProfile />
          <div className="w-full md:w-3/4">
            <Tabs />
            <SongList />
          </div>
        </div>
      </div>
      <SongPlayer />
    </div>
  );
};

export default App;
