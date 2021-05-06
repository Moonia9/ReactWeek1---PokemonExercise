import React, { useState } from "react";

const Logo = (properties) => {
  const logWhenClicked = () => {
    console.log("Image has been clicked!");
  };

  const URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png";
  const [motto, setMotto] = useState("Carpe"); //[variable, the "setter" = function]
  //we always need to call the setter as setAndTheNameOfTheFunc

  const changeMotto = () => setMotto("Diem"); //this is a temporary state

  return (
    <header>
      <h1>Welcome to {properties.appName}</h1>
      <img src={URL} onClick={logWhenClicked}></img>
      <input type="text"></input>
      <h2>{motto}</h2>
      <button onClick={changeMotto}>Change Motto</button>
    </header>
  );
};

export default Logo;
