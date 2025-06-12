const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div
      className={`${pokemon.types.map((t) => t.type.name).join('')} container col-12 col-md-3 m-1 rounded shadow item`}
    >
      <div id='photo'>
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}_image`} />
      </div>

      <p><strong>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></p>
      <p>
        Type: {pokemon.types.map(t =>
          t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
        ).join('/')}
      </p>

      <button
        type="button"
        className="btn btn-outline-primary btn-sm my-2"
        data-bs-toggle="modal"
        data-bs-target="#pokemonModal"
        onClick={() => onClick(pokemon)}
      >
        Ver Detalhes
      </button>
    </div>
  )
}

export default PokemonCard
