import React from "react";
import data from "./data.json";
import { Album } from "./Album";
/*
- Album cover image
- Album name
- Album external URL

- Artist external URL
- Artister
*/
console.log(data);
const albumArray = data.albums.items;

albumArray.forEach((album) => {
  console.log(album.name);
});

export const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-header">New albums and singles</h1>
      {albumArray.map((album) => {
        return (
          <Album
            key={album.name}
            albumName={album.name}
            albumImage={album.images[1].url}
            albumUrl={album.external_urls.spotify}
            artists={album.artists}
          />)
      })}
    </div>
  );
};
