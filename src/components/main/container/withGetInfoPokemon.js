import React, {useState, useEffect} from 'react'
import {getInfoPokemon} from '../../APIservice'

export const withGetInfoPokemon = WrapperComponent => {
  return () => {
    const [info, setInfo] = useState(null)
    useEffect(() => {
      getInfoPokemon(window.location.search.split('=')[1]).then(res => {
        setInfo(res)
      })
    }, [])

    return <WrapperComponent info={info} />
  }
}
