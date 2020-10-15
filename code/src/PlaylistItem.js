import React from "react";

export const PlaylistItem = (props) => {
  return(
    <div className="playlist-item">
        <a className="playlist-link" href={props.playlistUrl}>
          <img className="playlist-image"src={props.playlistImage} alt={props.name} />
        </a>
    </div>
  );
}
