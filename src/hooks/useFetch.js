import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFetch = url => {
 
  const [sendResults, setSendResults] = useState()

  useEffect(() => {
    axios.get(url)
    .then(res => setSendResults(res.data))
    .catch(err => console.log(err))
  }, [])
  
    return sendResults
}

export default useFetch