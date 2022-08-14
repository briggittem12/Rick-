import React from 'react'

const LocationCont = ({location}) => {
  
  
  return (
  

  <article className='principal__card'>
      <h2 className='card__title'>{location?.name}</h2>
      <ul className='principal__features'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>

    
  )
}

export default LocationCont