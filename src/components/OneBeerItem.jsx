import React from "react";
import { Link } from "react-router-dom";

const OneBeerItem = ({ beer }) => {
  return (
    <div key={beer._id} style={{ display: "flex" }}>
      <div>
        <Link to={beer._id} state={{ beer }}>
          <img src={`${beer.image_url}`} style={{ height: "200px" }}></img>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "100px",
        }}
      >
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>Created by {beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default OneBeerItem;
