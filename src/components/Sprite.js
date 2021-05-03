const Sprite = (id) => {
        

    return (
        <div>
            <img className='sprite' style={{height: "250px"}} alt='poke sprite' src={('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id.data + '.png')}></img>
            
        </div>
    )
}

export default Sprite