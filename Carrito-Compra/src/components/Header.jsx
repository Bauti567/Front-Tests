import React from 'react'
import Filters from './Filters'

function Header({changeFilters}) {
  return (
    <header>
        <h1>El header de mi app</h1>
        <Filters onChange={changeFilters}/>
    </header>
  )
}

export default Header