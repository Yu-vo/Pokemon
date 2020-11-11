import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {List} from './components/list'
import {Card} from './components/card'
import {WindowInfo} from '@components/window-info'

import {withGetInfoPokemon} from './container/withGetInfoPokemon'
import {withGetPokemons} from './container/withGetPokemons'
import {withGetPokemonsInfo} from './container/withGetPokemonsInfo'

const Combine = () => {
  const ListHOC = withGetPokemons(List)
  const CardHOC = withGetPokemonsInfo(Card)
  return (
    <div className="main">
      <ListHOC />
      <CardHOC />
    </div>
  )
}
export const Main = () => {
  const WindowInfoHOC = withGetInfoPokemon(WindowInfo)

  return (
    <>
      <Route path="/pokemon" component={Combine} exact />
      <Route path="/window-info" component={WindowInfoHOC} exact />
    </>
  )
}
