import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokeInfo from './components/PokeInfo';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokeInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
