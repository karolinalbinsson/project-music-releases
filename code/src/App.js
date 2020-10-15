import React from "react";
import data from "./data.json";
import stretchgoal from "./stretch-goal.json";
import {AlbumGallery} from "./AlbumGallery"
import{Playlist} from "./Playlist"

console.log(stretchgoal);
const playlistArray = stretchgoal.playlists.items;

playlistArray.forEach(item => {
  console.log(item.name);
  console.log(item.external_urls.spotify);
  console.log(item.images[0].url);
});
//console.log(data);
const resultArray = data.albums.items;
const albumArray = resultArray.filter(album => album.album_type ==="album");
//console.log(albumArray);
const singlesArray = resultArray.filter(album => album.album_type ==="single");
//console.log(singlesArray);

export const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="app-header">New albums &amp; singles</h1>
      </header>
      <main className="main-content">
      <div className="main-wrapper">
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
      </div>
      <Playlist 
        data ={playlistArray}
      />
      </main>
    </>
  );
};
