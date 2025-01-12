// Contador con useState: Crea un contador que aumente, disminuya y reinicie su valor.
import { useState } from "react";

function Counter() {
    const [total,setTotal] = useState(0)

    const sumar = ()=>{
        setTotal(total + 1);
    }
    const restar = ()=>{
        setTotal(total - 1)
    }
    const reset = ()=>{
        setTotal(0)
    }
    return (
        <div>Counter
            <div>
                <span>
                    El total es {total}
                </span>
                <button onClick={sumar}> Sumar </button>
                <button onClick={restar}> Restar </button>
                <button onClick={reset}> Reset </button>
                 
            </div>
        </div>
    )
}

export default Counter;