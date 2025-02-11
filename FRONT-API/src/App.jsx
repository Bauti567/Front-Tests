import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

function App() {

  return (
    <div className="bg-dark text-white">
      <Header/>
      <CharacterList></CharacterList>
    </div>
  );

}


export default App;
