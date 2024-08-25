import { useArticles } from "../contexts/ArticlesContext";
import Article from "./Article";
import styles from "./Articles.module.css";
function Articles() {
  const { isLoading, articles } = useArticles();
  return (
    <section className={styles.sectArticle}>
      {articles?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </section>
  );
}

export default Articles;
