import React from 'react'

const PokemonName = (name) => {

    const formatName = () =>{
        var upperCaseFormatted = name.data.replace("-", ". ").toUpperCase()
        return(upperCaseFormatted)
    }

    return(
        <div>
            <h1>{formatName()}</h1>
        </div>
    )
}

export default PokemonName