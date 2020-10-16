import React from 'react';

export const Artist = (props) => {
  return (
    <div className="artist">
      <a className="artist-link" href={props.artistUrl}>
        <p className="artist-name">{props.name}</p>
      </a>
    </div>
  );
}