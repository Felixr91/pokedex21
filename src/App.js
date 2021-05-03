import './App.css';
import { useState } from 'react'
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChangePokemon from './components/ChangePokemon'
import Sprite from './components/Sprite'
import PokemonName from './components/PokemonName';
import Navigation from './components/Navigation';

const App = () =>{
  const [name, setCurrentPoke] = useState('Pikachu')
  const [currentPokeID, setCurrentPokeID] = useState(25)
  // const [drawerOpen, setOpen] = useState(false)


  const updatePokemon = (name) => {

    var str = name.tolower

    const fetchPoke = async(e) => {
      try{
       
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + str)
        const data = await res.json()
        const name = data.name
        const pokeID = data.id

        setCurrentPoke(name)
        setCurrentPokeID(pokeID)

      } catch (e){
        alert('Please provide a valid pokemon name')
      }
    }

    fetchPoke(str)

  }


  return (
    <div className="App">
      <CssBaseline/>

      <Navigation></Navigation>

      <header className="App-header">

    
      <ChangePokemon onUpdate={updatePokemon}/>

      <PokemonName data = {name}/>

      <Sprite data = {currentPokeID}/>      

      <Button variant="contained" color="primary">
        Hello World
      </Button>
       

      </header>

    </div>
  );
}

export default App;
