// Contador con useState: Crea un contador que aumente, disminuya y reinicie su valor.
import { useState } from "react";

function Counter() {
    const [plus, setPlus] = useState(0)
    const [minus, setMinus] = useState(0)
    
    return (
        <div>Counter
            <div>
                <button onClick={}>
                    Sumar
                </button>
                <button onClick={}>
                    Restar
                </button>
            </div>
        </div>
    )
}

export default Counter;