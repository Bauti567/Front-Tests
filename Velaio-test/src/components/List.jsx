import React, { useEffect, useState } from 'react'


export default function List() {
    const[] = useState();
    useEffect(()=>{
        async function fetchData(params) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            console.log(data)
        }
    
        fetchData();
    },[])
    

    return (
    <div>List</div>
  )
}
