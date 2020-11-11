import React, {useState, useMemo, useEffect} from 'react'
import {getPokemons, getInfoPokemons, getByLink} from '@components/APIservice'

export const withGetPokemonsInfo = WrapperComponent => {
  return () => {
    const [next, setNext] = useState(getPokemons)
    const [inform, setInform] = useState([])
    const [offset, setOffset] = useState({})

    const handleLoad = () => {
      next.then(pokemons => {
        setNext(getByLink(pokemons.next))
      })
    }
    useEffect(() => {
      next.then(pokemons => {
        setOffset(pokemons.next.match(/\d+/g)[1])
        console.log(pokemons)
      })
    }, [next])
    // получение информации о покемонах с url-19 до url
    useMemo(() => {
      getInfoPokemons(offset - 19, offset).then(data => {
        setInform(d => d.concat(data))
      })
    }, [offset])
    return <WrapperComponent handleLoad={handleLoad} data={inform} />
  }
}
