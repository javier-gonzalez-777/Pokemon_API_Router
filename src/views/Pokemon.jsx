import { useState , useEffect  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard"
import React from 'react'

const Pokemon = () => {

    const { PokemonID } = useParams()
    const [data, setData] = useState()
    const [pokemonSelect, setPokemonSelect] = useState("")
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const navigate= useNavigate();   

   const FunDatos = () => {
        const ruta="https://pokeapi.co/api/v2/pokemon"
        fetch(ruta)
        .then(response =>{ return response.json()})
        .then(data => {setData(data)})
        .catch(error => { console.log(error)})
        }

        useEffect(()=>{
            FunDatos()
        },[])

        const handleChange = (event) => {
            setPokemonSelect(event.target.value)
        }
        const handleClick = () => {
            setSelectedPokemon(pokemonSelect)
            navigate(`/Pokemon/${pokemonSelect}`) 
   }

  return (
<>
    {
            (selectedPokemon == "" && data) ? 
            <div className="selectWrapper">
            <h2>Selecciona un pokemon</h2>
        <select onChange={(event) => handleChange(event)}>
        
                <option value="">Pokemones</option>
                {
                    data.results.map((pokemon, index) => (
                        <option key={index} value={pokemon.name}>{pokemon.name}</option>
                    ))
                }
        </select>
        
        <button onClick={() => handleClick()}>Ver detalle</button>
        </div>
        : null
      }
      {selectedPokemon !== "" && <PokemonCard pokeName={selectedPokemon} />}
      </> 
  )
}


export default Pokemon
