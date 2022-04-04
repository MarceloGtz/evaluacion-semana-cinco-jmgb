import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexLogo from '../images/Pokedex-Logo.png'

const Login = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch({
            type: 'GET_USERNAME',
            payload: userName[0].toUpperCase() + userName.slice(1)
        })
        setUserName('')
        navigate('/pokedex')
        console.log(userName)
    }

    return (
        <div className='Login-ctn'>
            <div className='Login'>
                <img src={PokedexLogo} alt="Pokedex-Logo" />
                <h1>Hi Trainer, What's your name?</h1>
                <p>Ready to find your favorite pokemon, trainer?</p>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Your name..."
                        required />
                    <button>Let's Start</button>
                </form>
                <div></div>
            </div>
        </div>
    );
};

export default Login;