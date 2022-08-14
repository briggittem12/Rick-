import React from 'react'
import useFetch from '../hooks/useFetch'

const Residents = ({url}) => {
    
    const resident = useFetch(url)
    
    //console.log(resident)

  return (

    <article className='card__contents'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='card__status'>
          <div className='circle'></div>
          <span className='status__content'>{resident?.status}</span>
        </div>
      </header>
      <div className='cart__list'>
        <h3>{resident?.name}</h3>
        <ul className='next__features'>
          <li><span>Specie: </span>{resident?.species}</li>
          <li><span>Origin: </span>{resident?.origin.name}</li>
          <li><span>Eppisodes where appear: </span>{resident?.episode.length}</li>
        </ul>
      </div>  
    </article>

  )
}

export default Residents