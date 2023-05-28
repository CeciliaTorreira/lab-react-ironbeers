import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import BeerList from './pages/BeerList';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import Error from './pages/Error';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App">
    <Navbar />
      


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<BeerList/>}/>
      <Route path="/random" element={<RandomBeer/>}/>
      <Route path="/beer/:id" element={<SingleBeer /> }/>

     {/* RUTAS DE ERRORES */}
     <Route path='/error' element={<Error />}/>
     <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
