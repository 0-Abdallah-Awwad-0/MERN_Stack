import { useState } from "react";

const PokemonAPI = () => {

  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=807"
      );

      const data = await response.json();

      setPokemon(data.results);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <button onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      {pokemon.map((poke, index) => (
        <p key={index}>{poke.name}</p>
      ))}

    </div>
  );
};

export default PokemonAPI;