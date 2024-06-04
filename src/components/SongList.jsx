import React from 'react';

const SongList = () => {
  const songs = [
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    { title: 'Song 3', artist: 'Artist 3' },
  ];

  return (
    <ul className="space-y-2">
      {songs.map((song) => (
        <li key={song.title} className="flex items-center hover:bg-gray-200 py-2 px-4 rounded-lg">
          <p>{song.title}</p>
          <p className="text-gray-500 ml-auto">{song.artist}</p>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
