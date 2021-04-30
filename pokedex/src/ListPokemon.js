import React from "react";

let myFavoritePokemon = ["Squirtle", "Charmander", "Bulbasaur"];
const ListPokemon = () => {
  <p>Other Pokemons that I like :</p>;
  return (
    <ul>
      {myFavoritePokemon.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default ListPokemon;
