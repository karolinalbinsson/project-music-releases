import React from 'react';

export const ActionBar = () => {
  return (
    <div className="action-bar">
      <img className="heart" alt="heart button" src="./icons/heart-white.svg" />
      <img
        className="play-button"
        alt="play button"
        src="./icons/play-white.svg" />
      <img className="dots" alt="dots more" src="./icons/dots-white.svg" />
    </div>
  );
};
