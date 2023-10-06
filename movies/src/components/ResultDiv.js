import React from "react";

function Resultdiv({ title, description, url, rating,  }) {
  return (
    <div className="resultdiv">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{rating}</p>
      <img src={url}></img>
    </div>
  );
}

export default Resultdiv;
