import React from "react";

export const Artist = (props) => {
    return (
        <div className="artist">
            <a className="artist-link" href={props.artistUrl}>
                <p className="artist-na">{props.name}</p>
            </a>
        </div>
    )
}