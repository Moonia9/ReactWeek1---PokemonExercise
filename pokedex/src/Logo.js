import React from "react";

const Logo = (properties) => {
  //const appName = "Pokedex";
  console.log(properties);
  return (
    <header>
      <h1>Welcome to {properties.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
    </header>
  );
};

export default Logo;
