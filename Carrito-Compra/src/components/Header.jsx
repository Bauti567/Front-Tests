import React from 'react'
import Filters from './Filters'


function Header({changeFilters}) {
  return (
    <div>
      <h2>El header</h2>
      <Filters changeFilters={changeFilters}/>
    </div>
  )
}

export default Header