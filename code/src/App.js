import React from "react";
import data from "./data.json";
import { Album } from "./Album";

console.log(data);
const resultArray = data.albums.items;
const albumArray = resultArray.filter(album => album.album_type ==="album");
console.log(albumArray);
const singlesArray = resultArray.filter(album => album.album_type ==="single");
console.log(singlesArray);
albumArray.forEach((album) => {
  console.log(album.name);
});

export const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="app-header">New albums &amp; singles</h1>
      </header>
      <section className ="wrapper">
        <h2 className="section-header">Albums</h2>
      <div className="app-container">
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
      </section>
      <section className="wrapper">
      <h2 className="section-header">Singles</h2>
      <div className="app-container">
        {singlesArray.map((album) => {
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
      </section>
    </>
  );
};
