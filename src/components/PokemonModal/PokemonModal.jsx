const PokemonModal = ({ pokemon }) => {
  if (!pokemon) return null

  return (
    <div
      className="modal fade"
      id="pokemonModal"
      tabIndex="-1"
      aria-labelledby="pokemonModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content text-dark">
          <div className="modal-header">
            <h1 className="modal-title fs-2 ms-auto" id="pokemonModalLabel">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="img-fluid"
            />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Experiência base: {pokemon.base_experience}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonModal
