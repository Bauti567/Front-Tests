import React, {useContext} from 'react'
import ComponentC from './ComponentC';
import { DataContext } from '../context/Context';

function ComponentB() {

    // Trayendo el context data
    const {contextData} = useContext(DataContext);

  return (
    <div>
        <p>El componente B</p>
        <span>{contextData}</span>
        <ComponentC/>        
    </div>
  )
}

export default ComponentB;
