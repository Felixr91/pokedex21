import './App.css';
import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Sprite from './components/Sprite'
import PokemonName from './components/PokemonName';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const App = () =>{
  const [name, setCurrentPoke] = useState('Pikachu')
  const [currentPokeID, setCurrentPokeID] = useState(25)
  const [lowerCaseName, setCurrentLowerCasePoke] = useState('pikachu')
  const [type, setPokemonType] = useState('electric')
  const [height, setPokeHeight] = useState('40')
  const [weight, setPokeweight] = useState('6.0')
  const [allNames, setAutoComplete] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [flavorText, setFlavorText] = useState('When several of these Pokémon gather, theirelectricity could build and cause lightning storms.')
 

  useEffect(() => {
    const fetchPokeNames = async() =>{
      try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()
        const pokearray = data.results

        setAutoComplete(pokearray)
      } catch(e){
        console.log('unable to get poke names for autocomplete', e)
      }
    }

    fetchPokeNames()
  }, [])


  const updatePokemon = (name) => {

    var str = name.tolower

    const fetchPoke = async(e) => {
      try{
       
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + str)
        const data = await res.json()
        const name = data.name
        const pokeID = data.id
        const lower = data.name.toLowerCase()
        const type = data.types[0].type.name
        const height = data.height*10
        const weight = data.weight/10
        
        if(data.id > 151){
          alert('Sorry, only first generation Pokemon!')
        } else{
          setCurrentPoke(name)
          setCurrentPokeID(pokeID)
          setCurrentLowerCasePoke(lower)
          setPokemonType(type)
          setPokeHeight(height)
          setPokeweight(weight)
          fetchFlavorText(pokeID)
        }

      } catch (e){
        alert('Please provide a name from the suggestions')
      }
    }

    const fetchFlavorText = async(id)=>{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+ id)
      const flavData = await res.json()
      const entry = flavData.flavor_text_entries[1].flavor_text
      
      setFlavorText(entry)
    }
    

    fetchPoke(str)
    
  }

  const onSubmit = (e) =>{
    
    e.preventDefault()
    
    if(!inputValue){
        alert("Please provide a name from the suggestions")
        return
    }
    // for mr.mime string must change to mr-mime
    var tolower = inputValue

    updatePokemon({tolower})


}
  

  return (
    <div className="App">
      <CssBaseline/>

    

      <header className="App-header">

  
        <form className="change-Pokemon" onSubmit={onSubmit}>

          <Autocomplete
            freesolo="true"

            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}

            id="combo-box-demo"
            options={allNames}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option) => option.name }
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search by Name" variant="outlined" />}
          />

          <input type="submit" value="GO" className="btn"></input>
        </form>

        <PokemonName data = {name}/>

        <Sprite data = {lowerCaseName}/>      

          <div className="table-container">
            <TableContainer >
              <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Number</TableCell>
                    <TableCell align="center">#{currentPokeID}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">{type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Height</TableCell>
                    <TableCell align="center">{height} centimeters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Weight</TableCell>
                    <TableCell align="center">{weight} kg</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flavor-container">
              <p>{flavorText}</p>
            </div>
          </div>



      </header>

    </div>
  );
}

export default App;
