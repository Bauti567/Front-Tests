// Crear contexto
import { createContext } from "react";

export const DataContext = createContext();

export function DataContextProvider(props){

    const contextData = 58;
    const valor = contextData;

    return(
        <DataContext.Provider value={contextData}>

            {props.children}

        </DataContext.Provider>
    )
}