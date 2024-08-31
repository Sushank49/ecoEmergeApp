import styles from "./Article.module.css";

function Article({ article }) {
  return (
    <div className={styles.article}>
      <div>
        <h1 className={styles.title}>{article.Title}</h1>
        <div className="tag"></div>
        <div className="tag"></div>
        <div className="tag"></div>
      </div>
      <div className={styles.articleData}>
        <span className={styles.author}>-{article.Author}</span>
        <span className={styles.date}>{article.Date}</span>
      </div>
      <p className={styles.content}>{article.Content.slice(0, 290)}...</p>
      <div className={styles.react}>
        <span className={styles.reactNum}>3.7k+</span>{" "}
        <button className={styles.reactBtn}>👍</button>
        <button className={styles.reactBtn}>👎</button>
      </div>
    </div>
  );
}

export default Article;
