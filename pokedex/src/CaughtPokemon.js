import React, { useState } from "react";

const CaughtPokemon = (properties) => {
  //Exercise D and Exercise G/fetch data
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    if (pokemonNameInput == "") {
      setCaught([]);
    } else {
      setCaught(caught + 1);
      setCaught(caught.concat(pokemonNameInput));
    }
  };

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {properties.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={catchPokemon}>Caught Pokemons</button>
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


//   //Exercise E
//   const [list, setCaught] = useState([]);
//   const catchPokemon = () => {
//     setCaught(list.concat("Jigglypufi"));
//   };
//   return (
//     <div>
//       <button onClick={catchPokemon}>Caught Pokemons</button>
//       <ul>
//         {list.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//         <p>
//           Caught {list.length} Pokemon on {properties.date}
//         </p>
//       </ul>
//     </div>
//   );
// };