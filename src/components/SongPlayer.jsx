import React, { useState } from 'react';

const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-lg">
      <img src="album-cover.png" alt="Album Cover" className="h-12 w-12 mr-4 rounded-lg" />
      <div className="flex items-center w-full">
        <p>Currently Playing Song</p>
        <p className="text-gray-500 ml-auto">Artist Name</p>
      </div>
      <div className="flex items-center">
        <button onClick={togglePlay} className={`mr-2 ${isPlaying ? 'text-green-500' : 'text-gray-500'}`}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <i className="fas fa-forward text-gray-500 hover:text-gray-300"></i>
      </div>
    </div>
  );
};

export default SongPlayer;
