import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";

function App() {

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Conexion con API</h1>
      <CharacterList></CharacterList>
    </div>
  );

}


export default App;
