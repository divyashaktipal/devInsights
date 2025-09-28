import articles from "./ArticleContent";
import ArticlesList from "../components/ArticlesList";

function ArticleListPage() {
  return (
    <>
      <div>
        <h1> Latest Articles:</h1>
        <ArticlesList articles={articles} />
      </div>
    </>
  );
}

export default ArticleListPage;
