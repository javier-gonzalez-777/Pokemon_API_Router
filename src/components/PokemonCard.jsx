import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const PokemonCard = () => {
  const { PokemonID } = useParams()
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  
  console.log("PokemonID..:",PokemonID)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonID}`);
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setError(error.message);
      }
    };

    fetchPokemonData();
  }, [PokemonID]);

  if (error) {
    return <div>Error fetching Pokemon data: {error}</div>;
  }

  if (!pokemonData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h3>Abilidad:</h3>
      <ul>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Estadisticas:</h3>
      <ul>
        {pokemonData.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;