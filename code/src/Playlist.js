import React from 'react';
import { PlaylistItem } from './PlaylistItem';

export const Playlist = (props) => {
  return (
    <aside className="playlist">
      <h3 className="playlist-header">Playlists</h3>
      {props.data.map((item) => {
        return (
          <PlaylistItem
            key={item.name}
            name={item.name}
            playlistImage={item.images[0].url}
            playlistUrl={item.external_urls.spotify} />
        );
      })}
    </aside>
  );
}
