import React, { useCallback, useState } from 'react'

function Hide() {
    const[hide,setHide] = useState(false)

    const showComponent = ()=>{
        setHide(!hide)
    }
    return (
    <div>
        <h1>Esconder o mostrar componente</h1>
        <button onClick={showComponent}>
            { hide ? "Mostrar" : "Ocultar" }
        </button>
        <div className="component">
            {
                hide && (
                    <div className="">
                        <span>El componente está funcionando</span>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Hide;