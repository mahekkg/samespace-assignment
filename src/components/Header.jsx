import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      <img src="spotify-logo.svg" alt="Spotify Logo" className="h-8 mr-4" />
      <h1>Spotify Clone</h1>
    </header>
  );
};

export default Header;
