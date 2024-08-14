import React from 'react'

function Cat({cats}) {
  return (
    <div key={index}>
      <p>{breed.name}</p>
      <p>Temperamento: {breed.temperament}</p>
      <img src={cat.url} alt="gato" width='300' />
    </div>
    
  )
}

export default Cat;