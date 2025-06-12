import './index.css'
import { useEffect, useState, useRef } from "react"
import PokemonCard from './components/PokemonCard/PokemonCard.jsx'
import PokemonModal from './components/PokemonModal/PokemonModal.jsx'
import LoadMore from './components/LoadMore/LoadMore.jsx'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [quant, setQuant] = useState(20)
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const loadMoreRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${quant - 20}`)
      .then(res => res.json())
      .then(data => {
        setTotal(data.count)
        const urls = data.results.map(item => item.url)

        Promise.all(urls.map(url => fetch(url).then(res => res.json())))
          .then(details => {
            setPokemons(prev => [...prev, ...details])
            setLoading(false)
          })
      })
  }, [quant])

  useEffect(() => {
    if (!loading && quant > 20) {
      loadMoreRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [loading])

  const atualizaQuant = () => {
    setQuant(prev => prev + 20)
  }

  const chegouAoFim = total !== null && pokemons.length >= total

  return (
    <div className='row d-flex text-center justify-content-center container-fluid bg-dark text-white total'>
      <h1 className='p-5'>Pokedex</h1>

      {pokemons.map(pok => (
        <PokemonCard key={pok.id} pokemon={pok} onClick={setSelectedPokemon} />
      ))}

      <PokemonModal pokemon={selectedPokemon} />
      <LoadMore
        loading={loading}
        chegouAoFim={chegouAoFim}
        atualizaQuant={atualizaQuant}
        loadMoreRef={loadMoreRef}
      />
    </div>
  )
}

export default App
