import styles from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={styles.article}>
      <h1>{article.Title}</h1>
    </div>
  );
}

export default Article;
