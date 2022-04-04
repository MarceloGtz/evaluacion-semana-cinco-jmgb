import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonUrl])

    return (
        <div>
            <li className='Card'>
                <Link to={`/pokedex/${pokemon.id}`}>
                    <h3>{pokemon.name?.[0].toUpperCase() + pokemon.name?.slice(1)}</h3>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                    <p>{pokemon.types?.[0].type.name}</p>
                    <p>Base stats</p>
                    <p>HP: {pokemon.stats?.[0].base_stat}</p>
                    <p>AT: {pokemon.stats?.[1].base_stat}</p>
                    <p>DF: {pokemon.stats?.[2].base_stat}</p>
                    <p>SP: {pokemon.stats?.[5].base_stat}</p>
                </Link>
            </li>
        </div>
    );
};

export default PokeCard;