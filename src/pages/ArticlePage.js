import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();
  //   const articleId = params.articleId;

  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
