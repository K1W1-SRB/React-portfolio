import React from "react";
import { marked } from "marked";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Blog = ({ article }) => {
  console.log(article);
  const { id, title, headerPicture, content, datePublished, shortDescription } =
    article.fields;
  const BlogshortDescription = marked(shortDescription);
  return (
    <div className="blog-card">
      {console.log(id)}
      <Link to={id}>
        {headerPicture && (
          <img
            className="headerPicture"
            src={headerPicture.fields.file.url}
            alt={title}
            title={title}
          />
        )}
      </Link>
      <h2 className="blog-title">{title}</h2>
      <p className="datePublished">{datePublished}</p>
      <section
        className="short-description"
        dangerouslySetInnerHTML={{ __html: BlogshortDescription }}
      />
    </div>
  );
};

export default Blog;
