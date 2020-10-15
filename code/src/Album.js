import React from "react";
import { Artist } from './Artist';
import { ActionBar } from './ActionBar';

export const Album = (props) => {
  return(
    <div className="album-container">
      <a className="album-link" href={props.albumUrl}>
        <img className="album-image" src={props.albumImage} alt="album" />
        <ActionBar />
      </a>
      <a href={props.albumUrl} className="album-name">{props.albumName}</a>
      <div className="artist-container">
        {props.artists.map((artist) => {
          return(
            <Artist
              key={artist.name}
              name={artist.name}
              artistUrl={artist.external_urls.spotify}
            />
          );
        })}
      </div>
    </div>
  );
}
