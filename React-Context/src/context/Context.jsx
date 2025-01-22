// Crear contexto
import { useContext } from "react";
import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props){
    const [contextData,setContextData] = useState(0);

    const valor = {contextData,setContextData}
    return(
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}

// Custom hook
export function UseDataContext(params) {
    const context = useContext(DataContext);
    if(!context){
        throw new Error('useData context debe ser utilizado con un Provider');

    }
    return context;
}
