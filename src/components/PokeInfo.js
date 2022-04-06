import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCardColor from '../utils/getCardColor';


const PokeInfo = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])
    console.log('POKEINFO', pokemon)
    return (
        <div className='Pokeinfo' style={{ background: getCardColor(pokemon.types?.[0].type.name) }}>
            <div className="Data glass">
                <img className='Pokeinfo__pokemon' src={pokemon.sprites?.other.home.front_default || pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                <div className="Pokeinfo__main">
                    <h3>#{pokemon.id}</h3>
                    <h3>{pokemon.name?.[0].toUpperCase() + pokemon.name?.slice(1)}</h3>
                    <hr />
                    <span>Data</span>
                    <div className="Pokeinfo__type">
                        <p>Height: {pokemon.height}ft</p>
                        <p>Weight: {pokemon.weight}lb</p>
                    </div>
                    <span>Types</span>
                    <div className="Pokeinfo__type">
                        <p className='name'>{pokemon.types?.length > 1 ? pokemon.types?.[0].type.name + ", " + pokemon.types?.[1].type.name : pokemon.types?.[0].type.name}</p>
                    </div>
                    <span>Abilities</span>
                    <div className="Pokeinfo__type">
                        <p className='name'>{pokemon.abilities?.length > 1 ? pokemon.abilities?.[0].ability.name + ", " + pokemon.abilities?.[1].ability.name : pokemon.abilities?.[0].ability.name}</p>
                    </div>
                    <br />
                </div>
            </div>
            <div className="Movements glass">
                <h3>Movements</h3>
                <div className="Pokeinfo__moves">
                    {
                        pokemon.moves?.map(move => (
                            <p className='name' key={move.url}>
                                {move.move.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PokeInfo;