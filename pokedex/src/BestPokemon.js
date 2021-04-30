import React from "react";
import ListPokemon from "./ListPokemon";

const BestPokemon = (properties) => {
 console.log(properties);
  return (
    <div>
      <p>My favorite Pokemon is JigglyPuff</p>
      <ListPokemon />
      <p>These are their strongest abilities :</p>
      <ul>
        {properties.abilities.map((abilityName, index) => (
          <li key={index}>{abilityName}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
