import React, { useState } from "react";

const CaughtPokemon = (properties) => {
  //Exercise D
  // const [caught, setCaught] = useState(0);

  // const catchPokemon = () => {
  //   setCaught(caught + 1);
  // };
  // return (
  //   <div>
  //     <p>
  //       Caught {caught} Pokemon on {properties.date}
  //     </p>
  //     <button onClick={catchPokemon}>Caught Pokemons</button>
  //   </div>
  // );

  //Exercise E
  const [list, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught(list.concat("Jigglypufi"));
  };
  return (
    <div>
      <button onClick={catchPokemon}>Caught Pokemons</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <p>
          Caught {list.length} Pokemon on {properties.date}
        </p>
      </ul>
    </div>
  );
};

export default CaughtPokemon;

//Call the catchPokemon function
//Update the caught variable in the state
//Call the setCaught function with the updated counter value
//Rerendering with the new <p> tag with the updated state value
//React is going to compare the new state with the old state
//The DOM of the browser
