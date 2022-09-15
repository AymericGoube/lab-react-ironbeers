import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <img src={require("../assets/beers.png")}></img>
      <Link to="/beers">All Beers</Link>
      <p>lorem ipsum</p>
      <img src={require("../assets/random-beer.png")}></img>
      <Link to="/random-beer">Random Beer</Link>
      <p>lorem ipsum</p>
      <img src={require("../assets/new-beer.png")}></img>
      <Link to="/new-beer">New beer</Link>
      <p>lorem ipsum</p>
    </div>
  );
};

export default Home;
