import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  const updateCity = (event) => {
    console.log(event.target);
    setCity(event.target.value);
  };

  return (
    <div>
      <input type="text" value={city} onChange={updateCity}></input>
      <button>Search</button>
      <p>Welcome to the city of {city} </p>
    </div>
  );
}

export default PokemonCity;
