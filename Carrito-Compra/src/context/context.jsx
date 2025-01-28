import { createContext, useState } from "react";

// Crear contexto
export const CartContext = createContext();

export function CartContextProvider(props) {

    const [total,setTotal] = useState();
    const contextData = 58;
    const valor = contextData;

    const AddCart = () =>{
        
    }

    return(
        <CartContext.Provider value={valor}>
            {props.children}
        </CartContext.Provider>
    )
}



