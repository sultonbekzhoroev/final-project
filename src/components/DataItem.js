import React from "react";

function DataItem({ el }) {
  return (
    <div>
      <p>{el.primary_artist.name}</p>
      <img src={el.song_art_image_thumbnail_url} width={100} />
    </div>
  );
}

export default DataItem;
