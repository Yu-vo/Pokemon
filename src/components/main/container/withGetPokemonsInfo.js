import React, {useState, useMemo, useEffect} from 'react'
import {getPokemons, getInfoPokemons, getByLink} from '@components/APIservice'

export const withGetPokemonsInfo = WrapperComponent => {
  return () => {
    const [next, setNext] = useState(getPokemons)
    const [nextP, setNextP] = useState([])
    const [url, setUrl] = useState({})

    const handleClick = () => {
      next.then(pokemons => {
        setNext(getByLink(pokemons.next))
        console.log(pokemons.next)
      })
    }
    useEffect(() => {
      console.log('1')
      next.then(pokemons => {
        setUrl(pokemons.next.match(/\d+/g)[1])
      })
    }, [next])

    useMemo(() => {
      console.log('2')
      getInfoPokemons(url - 19, url).then(data => {
        setNextP(d => d.concat(data))
      })
    }, [url])
    return <WrapperComponent handleClick={handleClick} data={nextP} />
  }
}
