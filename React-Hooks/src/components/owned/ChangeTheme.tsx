import React, { useState } from 'react'

function ChangeTheme() {
    const [theme, setTheme] = useState('white')
    const [Text,setText] = useState('black')
    const ChangeTheme = () => {
        setTheme((prevColor) => (prevColor === 'white' ?  'black': 'white'))
        setText((prevColor) => (prevColor === 'black' ?  'white': 'black'))
    }
    return (
        <div>
            <h1>Cambiador de fondo</h1>
            <div className=''>
                <button
                    onClick={ChangeTheme}
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: theme,
                        color: Text, 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                    type='button'
                >Cambiar Color</button>
            </div>
        </div>
    )
}

export default ChangeTheme;