import { createContext, useState } from "react";

// Crear contexto
export const CartContext = createContext();

export function CartContextProvider(props) {

    const [total,setTotal] = useState(0);
    const valor = {total,setTotal};

    return(
        <CartContext.Provider value={valor}>
            {props.children}
        </CartContext.Provider>
    )
}



