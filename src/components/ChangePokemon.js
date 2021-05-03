import { useState } from 'react'

const ChangePokemon = ({ onUpdate }) => {
    const[poke, setCurrentPoke] = useState('')
    

    const onSubmit = (e) =>{
        e.preventDefault()
   
        if(!poke){
            alert("Please provide a name")
            return
        }
        
        // for mr.mime string must change to mr-mime
        var tolower = poke.toLowerCase().replace(". ", "-")

        onUpdate({tolower})

        setCurrentPoke('')

    }
  

    return (

    <div className="container">
        
        <form className="change-Pokemon" onSubmit={onSubmit}>
            <label className="Pokemon-label">Search for Pokemon by name</label>
            <input className="Pokemon-field" value={poke} onChange={(e) => setCurrentPoke(e.target.value)}></input>
            
            <input type="submit" value="GO" className="btn"></input>
        </form>
        
    </div>

    );

}

export default ChangePokemon