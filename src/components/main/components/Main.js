import React, {Fragment} from 'react'
import {List} from './List'
import {Card} from './Card'
import {withGetPokemons} from '../container/withGetPokemons'
import {withGetPokemonsInfo} from '../container/withGetPokemonsInfo'

export const Main = () => {
  const ListHOC = withGetPokemons(List)
  const CardHOC = withGetPokemonsInfo(Card)
  return (
    <div className="main">
      <ListHOC />
      <CardHOC />
    </div>
  )
}
