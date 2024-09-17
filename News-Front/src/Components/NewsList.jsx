import React, { useEffect, useState } from 'react'

function NewsList() {
  const [news,SetNews] = useState([]);
  useEffect(()=>{

  },[])
  
  function fetchData(params) {
    const data = fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-16&sortBy=publishedAt&apiKey=202c54be158b431f959b07c54170da51')
    console.log(data);

  }

  fetchData();

  return (
    <div>NewsList</div>
  )
}

export default NewsList