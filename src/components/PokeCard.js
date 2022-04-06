import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getCardColor from '../utils/getCardColor';
import { Link } from 'react-router-dom';

const PokeCard = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonUrl])


    return (
        <div>
            <li className='Card' style={{ background: getCardColor(pokemon.types?.[0].type.name) }}>
                <Link to={`/pokedex/${pokemon.id}`}>
                    <div className='pokemon-div'>
                        <h3>{pokemon.name?.[0].toUpperCase() + pokemon.name?.slice(1)}</h3>
                        <img className='pokemon-img Pokeinfo__pokemon' src={pokemon.sprites?.other.home.front_default || pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                        <p className='name'>{pokemon.types?.length > 1 ? pokemon.types?.[0].type.name + ", " + pokemon.types?.[1].type.name : pokemon.types?.[0].type.name}</p>
                        <p>Base stats</p>
                        <hr />
                        <div className="pokecard__stats">
                            <p>HP: {pokemon.stats?.[0].base_stat}</p>
                            <p>AT: {pokemon.stats?.[1].base_stat}</p>
                            <p>DF: {pokemon.stats?.[2].base_stat}</p>
                            <p>SP: {pokemon.stats?.[5].base_stat}</p>
                        </div>
                    </div>
                </Link>
            </li>
        </div >
    );
};

export default PokeCard;