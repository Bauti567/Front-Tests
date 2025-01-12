import React, { useState } from 'react'

function CounterOwn() {
    const [num1,setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(0)
    
    return (
        <div>
            <h1>Calculadora</h1>
            <div>
                <div className="container-input">
                    <label htmlFor="">Número 1</label>
                    <input type="number" value={num1}/>
                    <label htmlFor="">Número 2</label>
                    <input type="number" value={num2}/>
                </div>
                <button></button>
                <div className="result">
                    <span>El resultado es:</span>
                    {total}
                </div>
            </div>
        </div>

    )
}

export default CounterOwn;
