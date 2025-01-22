// Este componente contiene el contexto

import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import { DataContextProvider } from '../context/Context';

function Container() {
  const generateData = 58;

  return (
    <div>
      <h1>Components container</h1>
      <DataContextProvider>
        <ComponentA/>
      </DataContextProvider>

    </div>
  )
}

export default Container;
