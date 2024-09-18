import React from "react";
import "./News.css";

function News({ title, image, description, author, url }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{author}</small>
        </p>
        <a href={url}>Leer más...</a>
      </div>
      <img src={image} className="card-img" alt="News" />
    </div>
  );
}

export default News;
