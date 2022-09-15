import React from "react";
import { Link } from "react-router-dom";
import OneBeerItem from "./OneBeerItem";

const ListOfBeers = ({ beers, input }) => {
  const filteredBeer = beers.filter((x) => {
    if (input === "") {
      return x;
    } else {
      return x.name.toLowerCase().includes(input);
    }
  });
  return filteredBeer.map((beer) => <OneBeerItem beer={beer} />);
};

export default ListOfBeers;
