import React from "react";
import { Link } from "react-router-dom";
import articles from "./ArticleContent";

const HomePage = () => {
  const featured = articles.slice(0, 2); // show top 2 articles as featured

  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to DevInsights 🧠</h1>
        <p>
          Your go-to hub for deep dives into React, Node.js, and modern web
          development.
        </p>
        <Link to="/articles" className="cta-button">
          Explore All Articles
        </Link>
      </header>

      <section className="featured-articles">
        <h2>Featured Reads</h2>
        {featured.map((article) => (
          <div key={article.name} className="article-preview">
            <h3>{article.title}</h3>
            <p>{article.content[0].slice(0, 150)}...</p>
            <Link to={`/articles/${article.name}`}>Read More</Link>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 DevInsights. Built with 💙 from India.</p>
      </footer>
    </div>
  );
};

export default HomePage;
