import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Loader} from '@components/loader'
import {WindowInfo} from '@components/window-info'
export const Card = ({data, handleLoad}) => {
  console.log(data)
  let card = null,
    route = null
  if (data) {
    card = data.map(item => (
      <li key={item.name + 'card'} className="card-item">
        <Link to={`/window-info?id=${item.id}`}>
          <img src={item.sprites.front_default} alt=""></img>
          <p>{item.name}</p>
        </Link>
      </li>
    ))
    route = data.map((item, index) => (
      <Route
        key={item.name + 'routelist'}
        path={`/window-info?id=${item.id}`}
        component={WindowInfo}
        exact
      />
    ))
  }
  return data.length ? (
    <div className="box-card">
      <ul className="card">{card}</ul>
      {route}
      <input
        className="button-next"
        type="button"
        onClick={handleLoad}
        value="..."
      />
    </div>
  ) : (
    <Loader />
  )
}
