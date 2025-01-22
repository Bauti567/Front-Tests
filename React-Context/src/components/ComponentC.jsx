import React, {useContext} from 'react'
import { DataContext } from '../context/Context';
import ComponentD from './ComponentD';


function ComponentC() {

    // Destructuracion de informacion
    const {contextData} = useContext(DataContext);
    

    return (
    <div>
        <p>El componente C</p>
        <span>{contextData}</span>
        <ComponentD/>
    </div>
  )
}

export default ComponentC;
