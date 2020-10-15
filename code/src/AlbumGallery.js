import React from "react";
import { Album } from "./Album";

export const AlbumGallery  = (props) => {
    return (
    <section className ="wrapper">
        <h2 className="section-header">{props.title}</h2>
      <div className="app-container">
        {props.data.map((album) => {
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
    )

}