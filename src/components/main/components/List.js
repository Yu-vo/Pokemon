import React from 'react'
import {Loader} from '@components/loader'
import {Link, Route, Switch} from 'react-router-dom'
import {WindowInfo} from '@components/window-info'

export const List = ({data, handleLoad}) => {
  console.log(data)
  let list = null,
    route = null
  if (data) {
    list = data.map(item => (
      <li key={item.name + 'list'} className="list-item">
        <Link to={`/window-info?id=${item.url.match(/\d+/g)[1]}`}>
          {item.name}
        </Link>
      </li>
    ))
    route = data.map(item => (
      <Route
        key={item.name + 'routelist'}
        path={`/window-info?id=${item.url.match(/\d+/g)[1]}`}
        render={props => <WindowInfo {...props} url={item.url} />}
        exact
      />
    ))
  }
  return data.length ? (
    <div className="box-list">
      <ul className="list">{list}</ul>
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
