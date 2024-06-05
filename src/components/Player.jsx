import React from "react";

function Player() {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <div className="text-3xl mb-4">Viva La Vida</div>
      <div className="mb-4">Coldplay</div>
      <img
        src="https://via.placeholder.com/40"
        alt="Viva La Vida Album Cover"
        className="w-64 h-64 mb-4"
      />
      <div className="flex items-center">
        <button className="mr-4">◀️</button>
        <button className="mr-4">⏸️</button>
        <button>▶️</button>
      </div>
    </div>
  );
}

export default Player;
