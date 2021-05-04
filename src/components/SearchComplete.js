import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchComplete = () => {
    const [allNames, setAutoComplete] = useState([])


    const fetchPokeNames = async() =>{
      try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()
        const pokearray = data.results

        setAutoComplete(pokearray)
      } catch(e){
        console.log('unable to get poke names for autocomplete')
      }
    }

    
    useEffect(()=>{
        fetchPokeNames()
    })

    return (
        <div>
          <Autocomplete
            id="combo-box-demo"
            options={allNames}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option) => option.name }
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search by Name" variant="outlined" />}
          />

        </div>
    );
}

export default SearchComplete