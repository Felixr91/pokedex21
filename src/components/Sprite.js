import { useState } from 'react'

const Sprite = (props) => {

    const [imgSource, setImageSource] = useState('')    

    return (
        <div>
            <img className='sprite' style={{height: "100px"}} alt='poke sprite' src={('https://img.pokemondb.net/sprites/black-white/anim/normal/' + props.data + '.gif')}></img>
            
        </div>
    )
}

export default Sprite