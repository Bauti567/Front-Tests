import React, {useContext} from 'react'
import { DataContext } from '../context/Context';
import ComponentB from './ComponentB';


function ComponentA() {

  return (
    <div>
      <p>El componente A</p>
      <ComponentB/>
    </div>
  )
}

export default ComponentA;