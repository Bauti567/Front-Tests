import React, { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";

function Header() {
    const {setFilterGender} = useContext(CharacterContext);
    const [filter,setFilters] = useState("");
    

    const handleFilterGender = (characters)=>{
        return characters.filter(character => (
            character.gender === "Male"
        ))
    }

  return (
    <header>
      <nav>
        <h1>Navbar con filtros</h1>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleFilterGender}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Filtrar genero
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
