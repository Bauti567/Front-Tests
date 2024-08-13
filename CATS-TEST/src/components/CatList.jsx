import React from 'react'
import { useEffect,useState } from 'react'

function CatList() {

  const[cats,setCats] = useState([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_8apUnQOeQqjgspowL0i2m1N5mobvQLm31yZMS75gCiz0PmuCNtdZuNRBhlpxHVFc')
      const data = await response.json()
      console.log(data)
      setCats(data)

    }
    fetchData();


  },[])

  return (
    <div>
      {
        cats.map(cat=>{
          return(
            <div key={cat.id}>
              <p>{cat.breeds.name}</p>
              <p>temperament: {cat.breeds.temperament}</p>
              <img src={cat.url} alt="" width='300' />
            </div> 
          )
        })
        
      }
    </div>
  )

}

export default CatList