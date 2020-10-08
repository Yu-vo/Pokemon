import React, {useState, useEffect} from 'react'
import {getPokemons, getByLink} from '../../APIservice'

export const withGetPokemons = WrapperComponent => {
  return () => {
    const [data, setData] = useState([])
    const [next, setNext] = useState(getPokemons)

    const handleClick = () => {
      next.then(pokemons => {
        setNext(getByLink(pokemons.next))
        console.log(pokemons.next)
      })
    }

    useEffect(() => {
      console.log('effect')
      next.then(pokemons => {
        setData(data => data.concat(pokemons.results))
      })
    }, [next])

    return <WrapperComponent data={data} handleClick={handleClick} />
  }
}
