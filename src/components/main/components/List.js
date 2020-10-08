import React from 'react'
import {Loader} from '@components/loader'
import {Link, Route, Switch} from 'react-router-dom'
import {WindowInfo} from '@components/window-info'

export const List = ({data, handleClick}) => {
  let list = null,
    route = null
  if (data)
    list = data.map((item, index) => (
      <li key={item.name + 'list'} className="list-item">
        <Link to={`/window-info/${index}`}>{item.name}</Link>
      </li>
    ))

  if (data)
    route = data.map((item, index) => (
      <Route
        key={item.name + 'routelist'}
        path={`/window-info/${item.index}`}
        render={props => <WindowInfo {...props} url={item.url} />}
        exact
      />
    ))

  return data ? (
    <div className="box-list">
      <ul className="list">{list}</ul>
      {route}
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
