import React from "react";
import { Artist } from './Artist';

export const Album = (props) => {
  return (
    <div className="album-container">
      <a className="album-link" href={props.albumUrl}>
        <p className="album-name">{props.albumName}</p>
        <img className="album-image" src={props.albumImage} alt="album" />
      </a>
      {props.artists.map((artist) => {
        return (
          <Artist
            key={artist.name}
            name={artist.name}
            artistUrl={artist.external_urls.spotify}
          />
        )
      })}
    </div>);
};
