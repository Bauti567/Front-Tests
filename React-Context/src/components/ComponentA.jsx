import React, {useContext} from 'react'
import { DataContext } from '../context/Context';
import ComponentB from './ComponentB';
import { UseDataContext } from '../context/Context';

function ComponentA() {
  const {contextData, setContextData} = UseDataContext();

  return (
    <div>
      <p>El componente A</p>
      <span>{contextData}</span>
      <button onClick={()=>{
        setContextData(contextData + 1)
      }}>Aumentar el contexto</button>
      <ComponentB/>
    </div>
  )
}

export default ComponentA;