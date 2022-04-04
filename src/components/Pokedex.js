import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokeCard from './PokeCard';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
    const navigate = useNavigate();
    const userName = useSelector(state => state.userName)
    const [pokemons, setPokemons] = useState([]);
    const [pokemonInput, setPokemonInput] = useState('')
    const [types, setTypes] = useState([]);
    const [page, setPage] = useState(1);
    // PAGINACION
    const pokemonNumber = 16;
    const lastIndex = pokemonNumber * page;
    const firstIndex = lastIndex - pokemonNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons?.length / pokemonNumber)
    const pagesNumber = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesNumber.push(i);
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1226`)
            .then(res => setPokemons(res.data.results))
    }, [])
    const submit = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonInput}`);
    }
    const handleType = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])
    console.log(pokemons)
    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName}, here is your Pokedex.</p>
            <div className="select">
                <select onChange={handleType}>
                    {
                        types.map(type => (
                            <option key={type.url} value={type.url}>
                                {type.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <form className="input-ctn" onSubmit={submit}>
                <label htmlFor="search">Type a pokemon or id</label>
                <input type="text" id="search" value={pokemonInput} onChange={e => setPokemonInput(e.target.value)} />
                <button>Search</button>
            </form>
            {page} / {totalPages}
            <div className="pagesButton">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous Page</button>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next Page</button>
            </div>
            <ul className='CardList'>
                {/* AQUI */}
                {
                    pokemonPaginated.map(pokemon => (
                        <PokeCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url} />
                    ))
                }
            </ul>
            <div className="pagesNumber">
                {pagesNumber.map(pageNumber => <button onClick={() => setPage(pageNumber)}>{pageNumber}</button>)}
            </div>
        </div>
    );
};

export default Pokedex;