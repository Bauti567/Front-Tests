import React, { useEffect, useState } from "react";
import News from "./News";

function NewsList() {
  const [news, setNews] = useState([]);

  // cada vez que se renderice al componete
  useEffect(() => {
    async function fetchData(params) {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=202c54be158b431f959b07c54170da51"
      );
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {news.map((article, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <News
                title={article.title}
                description={article.description}
                author={article.author}
                image={article.urlToImage}
                url={article.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsList;
