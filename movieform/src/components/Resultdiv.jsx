import React from "react";

function Resultdiv({ title, description, url, rating,  }) {
  return (
    <div className="resultdiv">
      <div className="detailsDiv"> 
          <h1>{title}</h1>
          <p>Description:{description}</p>
          <p>Rating:{rating}</p>
        </div>
     
      <div className="imageDiv"> <img src={url}></img></div>
     
    </div>
  );
}

export default Resultdiv;
