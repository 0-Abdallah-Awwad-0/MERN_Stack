import axios from "axios";
import { useState } from "react";

const PokemonAPI = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=807",
      );
      setPokemon(response.data.results);
    } catch (error) {
      console.log(error);
      setError("Something went wrong while loading the Pokémon.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="app">
      <h1>Pokémon API with Axios</h1>

      <button onClick={fetchPokemon} disabled={loading}>
        {loading ? "Loading..." : " Fetch Pokémon"}
      </button>

      {error && <p className="error">{error}</p>}

      <ul>
        {pokemon.map((item, index) => (
          <li key={item.name}>
            {index + 1}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAPI;
