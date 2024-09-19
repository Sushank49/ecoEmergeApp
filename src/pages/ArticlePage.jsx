import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useArticles } from "../contexts/ArticlesContext";
import { getArticle } from "../contexts/getDB";

import styles from "./ArticlePage.module.css";

import Spinner from "../components/Spinner";

function ArticlePage() {
  const { id } = useParams();
  const { selectedArticle, isLoading } = useArticles();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      if (!selectedArticle || Object.keys(selectedArticle).length === 0) {
        const fetchedArticle = await getArticle(id);
        setArticle(fetchedArticle);
      } else {
        setArticle(selectedArticle);
      }
    }

    fetchArticle();
  }, [id, selectedArticle]);

  console.log(article);

  return (
    <div>
      {isLoading && <Spinner></Spinner>}
      {!article?.Title ? null : (
        <div className={styles.articlePage__head}>
          <h1 className={styles.articlePage__heading}>{article?.Title}</h1>
          <div className={styles.articlePage__details}>
            <div>
              <span className={styles.articlePage__author}>
                -{article?.Author}
              </span>
              <span className={styles.articlePage__date}>{article?.Date}</span>
            </div>
          </div>
          <div>
            <article className={styles.articlePage__content}>
              <div className={styles.articlePage__img}>
                <img
                  className={styles.articlePage__img}
                  src={`${article?.Image}`}
                />
              </div>
              <div className={styles.articlePage__item}>
                <div className={styles.articlePage__text}>
                  {article?.Content}
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
