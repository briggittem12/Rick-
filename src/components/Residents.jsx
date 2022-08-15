import React from 'react'
import useFetch from '../hooks/useFetch'

const Residents = ({url}) => {
    
    const resident = useFetch(url)
    
    //console.log(resident)

  return (

    <article className='card__contents'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
      </header>
      <div className='cart__list'>
        <h3>{resident?.name}</h3>
        <div className='status'>
              <h4 className={resident?.status}>{resident?.status}</h4>
        </div>
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