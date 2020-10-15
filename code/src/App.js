import React from "react";
import data from "./data.json";
import stretchgoal from "./stretch-goal.json";
import {AlbumGallery} from "./AlbumGallery";
import {Playlist} from "./Playlist";

const playlistArray = stretchgoal.playlists.items;
const resultArray = data.albums.items;
const albumArray = resultArray.filter(album => album.album_type ==="album");
const singlesArray = resultArray.filter(album => album.album_type ==="single");

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
