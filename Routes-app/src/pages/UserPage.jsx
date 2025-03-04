import React from 'react'
import { useParams } from 'react-router-dom';

function UserPage() {
    const {id} = useParams();
    
  return (
    <div>
        <h1>UserPage</h1>
        User<p>{id}</p>
    </div>   
  )
}

export default UserPage;