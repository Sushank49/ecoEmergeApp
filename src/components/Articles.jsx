import { useArticles } from "../contexts/ArticlesContext";
import Article from "./Article";
import Spinner from "./Spinner";
import styles from "./Articles.module.css";
import { Link } from "react-router-dom";
function Articles() {
  const { isLoading, articles, showArticle } = useArticles();

  function handleClick(article) {
    showArticle(article);
  }

  return (
    <section className={styles.sectArticle}>
      {isLoading && <Spinner />}
      {articles?.map((article) => (
        <Link
          key={article.id}
          to={`article/${article.id}`}
          className={styles.a}
        >
          <Article article={article} handleClick={handleClick} />
        </Link>
      ))}
    </section>
  );
}

export default Articles;
