import React, { useEffect, useState } from 'react'

function NewsList() {
    const [news,setNews] = useState([]);

    // cada vez que se renderice al componete   
    useEffect(()=>{
        async function fetchData(params) {
            const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-16&sortBy=publishedAt&apiKey=202c54be158b431f959b07c54170da51')
            const data = await response.json()
            setNews(data.articles)
            console.log(data.articles)
        
        }
        fetchData();
        
    },[])

    return (
    <div>
        {
            news.map(news=>{
                
            })
        }
    </div>
  )
}

export default NewsList