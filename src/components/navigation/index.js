import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import logo from '@assets/Pokemon_logo.svg.png'

export const Navigation = () => {
  const navLink = [
    {id: 1, title: 'Pokemons', path: '/pokemon'},
    {id: 2, title: 'Pokedex', path: '/pokedex'},
    {id: 3, title: 'Berry', path: '/berry'},
  ]
  const navList = navLink.map(item => (
    <li className="nav-item" key={item.id}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ))
  return (
    <div className="header">
      <img src={logo} alt="" className="logo"></img>
      <ul className="nav">{navList}</ul>
    </div>
  )
}
