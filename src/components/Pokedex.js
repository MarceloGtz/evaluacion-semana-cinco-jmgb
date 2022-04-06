import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokeCard from './PokeCard';
import PokedexLogo from '../images/Pokedex-Logo.png'
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
    const navigate = useNavigate();
    const userName = useSelector(state => state.userName)
    const [pokemons, setPokemons] = useState([]);
    const [pokemonInput, setPokemonInput] = useState('')
    const [types, setTypes] = useState([]);
    const [page, setPage] = useState(1);
    // PAGINACION
    const pokemonNumber = 42;
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
            .then(res => {
                const typesFiltered = res.data.results.filter(
                    type => type.name !== 'unknown' && type.name !== 'shadow'
                )
                setTypes(typesFiltered)
            })
    }, [])
    return (
        <div>
            <div className="cuadro"></div>
            <br />
            <br />
            <br />
            <br />
            <img className='pokedexlogo' src={PokedexLogo} alt="Pokedex-Logo" />
            <p className='pokedex__name'>Welcome <span>{userName}</span>, here is your Pokedex.</p>
            <div className="searchBar">
                <form className="pokedex-input-ctn" onSubmit={submit}>
                    <label className='label-dex' htmlFor="search">Type a pokemon or id</label>
                    <input type="text" id="search" value={pokemonInput} onChange={e => setPokemonInput(e.target.value)} />
                    <button>Search</button>
                </form>
                <div className='pokedex__select-div'>
                    <select onChange={handleType} className="pokedex__select">
                        {
                            types.map(type => (
                                <option key={type.url} value={type.url}>
                                    {type.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {page} / {totalPages}
            <div className="pagesButton">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}><i className="fa-solid fa-angle-left"></i></button>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}><i className="fa-solid fa-angle-right"></i></button>
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
        </div >
    );
};

export default Pokedex;