import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  const userId = '0411J'
  
  return (
    <div>
      <h1>Aplication</h1>
      <Link to={`/user/${userId}`}>Home page</Link>
    </div>
  )
}

export default HomePage;
