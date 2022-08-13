import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationCont from './components/LocationCont'
import Residents from './components/Residents'
import Rick from './assets/img/obt.jpg'


function App() {
  
  const [capSubmit, setCapSubmit] = useState('')
  const [location, setLocation] = useState()
  
  
  useEffect(() => {
    let anyLocat = Math.floor(Math.random() * (126 - 1) + 1)
    if (capSubmit === ''){
      anyLocat
    } else {
      anyLocat = capSubmit
    }


    let URL = `https://rickandmortyapi.com/api/location/${anyLocat}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [capSubmit])

  let saveSubmit = e => {
    e.preventDefault()
    setCapSubmit(e.target.search.value)
  }

  return (
    <section className="App">
      <header className='header'>
        <div>
        {/* <img className='header__img' src={Rick} alt="Rick and Morty" /> */}
        <h1>Ricky and Morty</h1>
        </div>
      </header>
      

      <form onSubmit={saveSubmit}>
        <input id='search' type="text" />
        <button>Search</button>
      </form>
     

      <LocationCont location={location}/>
      
      <div className='content'>
        {
          location?.residents.map(url => (
            <Residents
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </section> 
  )
}

export default App

