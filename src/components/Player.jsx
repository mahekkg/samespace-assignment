import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineStepForward,
  AiOutlineStepBackward,
} from "react-icons/ai";

function Player({ currentSong, songs, setCurrentSong }) {
  const audioRef = useRef(new Audio(currentSong?.url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
    setProgress(newProgress);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  if (!currentSong) {
    return (
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-900 lg:bg-transparent">
        <div className="text-3xl mb-4">No song selected</div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-900 lg:bg-transparent">
      <div className="text-3xl mb-4">{currentSong.name}</div>
      <div className="mb-4">{currentSong.artist}</div>
      <img
        src={`${currentSong.cover}`}
        alt={`${currentSong.name} Album Cover`}
        className="w-64 h-64 mb-4"
      />
      <div className="flex flex-col items-center">
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          // className="mr-4"
          style={{ width: "300px" }}
        />
        <div className="flex my-3">
          <button onClick={handlePrevious} className="mr-4">
            <AiOutlineStepBackward size={30} />
          </button>
          <button onClick={togglePlayPause} className="mr-4">
            {isPlaying ? (
              <AiOutlinePauseCircle size={30} />
            ) : (
              <AiOutlinePlayCircle size={30} />
            )}
          </button>
          <button onClick={handleNext} className="mr-4">
            <AiOutlineStepForward size={30} />
          </button>
        </div>
        <div className="flex">
          <p className="font-4xl mx-2">-</p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            // className="mr-4"
            style={{ width: "100px" }}
          />
          <p className="font-4xl mx-2">+</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
