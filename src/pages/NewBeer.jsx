import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");
  const body = {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {});
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="tagline">tagLine</label>
        <input
          type="text"
          name="name"
          id="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="first_brewed">first_brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={first_brewed}
          onChange={(event) => setFirst_brewed(event.target.value)}
        />
        <label htmlFor="brewers_tips">brewers_tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={brewers_tips}
          onChange={(event) => setBrewers_tips(event.target.value)}
        />
        <label htmlFor="attenuation_level">attenuation_level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={attenuation_level}
          onChange={(event) => setAttenuation_level(event.target.value)}
        />
        <label htmlFor="contributed_by">contributed_by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={contributed_by}
          onChange={(event) => setContributed_by(event.target.value)}
        />
        <input type="submit" value="Add new beer" />
      </form>
    </>
  );
};

export default NewBeer;
