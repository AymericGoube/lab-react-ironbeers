import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerList from "./BeerList";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import BeerCard from "../components/BeerCard";

const SingleBeer = () => {
  const { id } = useParams();
  const [beers, setNewBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setNewBeers(response.data);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <BeerCard beers={beers}></BeerCard>
    </>
  );
};

export default SingleBeer;
