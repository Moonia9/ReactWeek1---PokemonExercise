import React from "react";

const CaughtPokemon = (properties) => {
  console.log(properties);
  return <p>Caught 0 Pokemon on {properties.date}</p>;
};

export default CaughtPokemon;
