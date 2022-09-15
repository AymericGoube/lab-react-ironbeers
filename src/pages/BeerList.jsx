import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListOfBeers from "../components/ListOfBeers";

const BeerList = () => {
  const [beers, setNewBeers] = useState([]);

  const [inputText, setInputText] = useState("");
  let convertToLower = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setNewBeers(response.data);
    });
  }, []);
  if (!beers.length) return <div>Loading...</div>;
  return (
    <>
      <Header></Header>
      <div style={{ textAlign: "center" }}>
        <input placeholder="Search a beer" onChange={convertToLower} />
      </div>
      <ListOfBeers input={inputText} beers={beers} />
    </>
  );
};

export default BeerList;
