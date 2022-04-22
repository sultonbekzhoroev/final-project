import React from "react";

function DataItem({ el }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <img src={el.img} width={100} />
      <p>{el.title}</p>
    </div>
  );
}

export default DataItem;
