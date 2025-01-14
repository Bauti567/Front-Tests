import React, { useState } from 'react'

function CounterOwn() {
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [total,setTotal] = useState(0)
    
    const Sum = ()=>{
        setTotal(Number(num1) + Number(num2))
    }
    return (
        <div>
            <h1>Calculadora</h1>
            <div>
                <div className="container-input">
                    <label htmlFor="">Número 1</label>
                    <input 
                        type="number"  
                        placeholder='Ingresa un número'
                        onChange={(e)=> setNum1(e.target.value)}

                    />

                    <label htmlFor="">Número 2</label>
                    <input 
                        type="number" 
                        placeholder='Ingresa un número'
                        onChange={(e)=> setNum2(e.target.value)} 
                    />
                </div>

                <button onClick={Sum}>Calcular número</button>
                <div className="result">
                    <span>El resultado es:</span>
                    {total}
                </div>
            </div>
        </div>

    )
}


export default CounterOwn;
