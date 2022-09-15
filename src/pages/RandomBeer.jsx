import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import Header from "../components/Header";

const RandomBeer = () => {
  const [beers, setNewBeers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setNewBeers(response.data);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <BeerCard beers={beers}></BeerCard>;
    </>
  );
};

export default RandomBeer;
