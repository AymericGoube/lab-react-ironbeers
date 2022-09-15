import React from "react";

const BeerCard = ({ beers }) => {
  return (
    <div className="main">
      <img src={`${beers.image_url}`} style={{ height: "400px" }}></img>
      <div className="beerContent">
        <h1>{beers.name}</h1>
        <p>{beers.attenuation_level}</p>
      </div>
      <div className="beerContent">
        <p>{beers.tagline}</p>
        <p>{beers.first_brewed}</p>
      </div>
      <p>{beers.description}</p>
      <p>{beers.contributed_by}</p>
    </div>
  );
};

export default BeerCard;
