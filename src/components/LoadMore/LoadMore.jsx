const LoadMore = ({ loading, chegouAoFim, atualizaQuant, loadMoreRef }) => {
  return (
    <div className='my-3' ref={loadMoreRef}>
      {loading ? (
        <div className='justify-content-center d-flex'>
          <p>Carregando</p>
          <p className='carregando'></p>
        </div>
      ) : (
        chegouAoFim ? (
          <p>✅ Todos os pokémons foram carregados!</p>
        ) : (
          <button onClick={atualizaQuant} className='btn btn-primary'>
            Carregar mais
          </button>
        )
      )}
    </div>
  )
}

export default LoadMore
