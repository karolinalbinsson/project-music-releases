import React from "react";
import data from "./data.json";
import {AlbumGallery} from "./AlbumGallery"

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
      <AlbumGallery
        key={"1"}
        data={albumArray}
        title="Albums" 
      />
      <AlbumGallery
        key={"2"}
        data={singlesArray}
        title="Singles"  
      />
    </>
  );
};
