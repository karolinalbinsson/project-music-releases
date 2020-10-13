import React from "react";
import data from "./data.json";
import { Album } from "./Album";

console.log(data);
const albumArray = data.albums.items;

albumArray.forEach((album) => {
  console.log(album.name);
});

export const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="app-header">New albums &amp; singles</h1>
      </header>
      <section className="app-container">

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
      </section>
    </>
  );
};
