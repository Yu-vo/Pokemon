import React, {useState, useEffect} from 'react'
import {Loader} from '@components/loader'

export const Card = ({data, handleClick}) => {
  useEffect(() => {
    console.log(data)
  }, [data])
  let card = null
  if (data)
    card = data.map(item => {
      return (
        <li className="card-item" key={item.name}>
          <img src={item.sprites.front_default} alt=""></img>
          <p>{item.name}</p>
        </li>
      )
    })
  return data ? (
    <div className="box-card">
      <ul className="card">{card}</ul>
      <input
        className="button-next"
        type="button"
        onClick={handleClick}
        value="ᐯ"
      />
    </div>
  ) : (
    <Loader />
  )
}
