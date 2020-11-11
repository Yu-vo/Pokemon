import React, {useState, useEffect} from 'react'

import {Loader} from '@components/loader'

export const WindowInfo = ({info}) => {
  console.log(info)
  return info ? (
    <section className="window-info__wrapper">
      <div className="window-info">
        <img src={info.sprites.front_default} alt=""></img>
        <h1>{info.name}</h1>
        <h3>Рост</h3>
        <p>{info.height}</p>
        <h3>Вес</h3>
        <p>{info.weight}</p>
        <h3>Способности</h3>
        {info.abilities.map(item => (
          <p key={'abilities' + item.ability.url + item.ability.name}>
            {item.ability.name}
          </p>
        ))}
        <h3>Начальный опыт</h3>
        <p>{info.base_experience}</p>
      </div>
    </section>
  ) : (
    <Loader />
  )
}
