import React, {useState, useEffect} from 'react'
import {getPokemons, getByLink} from '../../APIservice'

export const withGetPokemons = WrapperComponent => {
  return () => {
    const [next, setNext] = useState(getPokemons)
    const [inform, setInform] = useState([])

    const handleLoad = () => {
      next.then(pokemons => {
        setNext(getByLink(pokemons.next))
      })
    }
    useEffect(() => {
      next.then(pokemons => {
        setInform(data => data.concat(pokemons.results))
      })
    }, [next])

    return <WrapperComponent data={inform} handleLoad={handleLoad} />
  }
}
