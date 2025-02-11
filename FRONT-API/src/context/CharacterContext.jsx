import { createContext, useState } from "react";


export const CharacterContext = createContext()

export function CharacterContextProvider ({children}){
    const [filterGender,setFilterGender] = useState("");

    
    return(
        <CharacterContext.Provider 
            value={{filterGender,setFilterGender}}
            >
            {children}
        </CharacterContext.Provider>
    )
}

