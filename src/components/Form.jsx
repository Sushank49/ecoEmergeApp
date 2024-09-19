import styles from "./Form.module.css";
import { useState } from "react";

import BtnSecondary from "../components/BtnSecondary";
import BtnPrimary from "../components/BtnPrimary";
import { useArticles } from "../contexts/ArticlesContext";

function Form() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const { createArticle } = useArticles();
  function handleSubmit() {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    const newArticle = {
      Content: content,
      Title: title,
      Image: img,
      Author: "Sushank Dhungana",
      Date: formattedDate,
    };

    createArticle(newArticle);
    setTitle("");
    setImg("");
    setContent("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputParent}>
        <label htmlFor="title">Title ✍️</label>
        <label htmlFor="img">Link for your image 🔗</label>
        <label htmlFor="content">Content 📖</label>
      </div>
      <div className={styles.inputParent}>
        <input
          className={styles.input}
          type="text"
          name="title"
          placeholder="Title..."
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="img"
          id="img"
          placeholder="https://images.unsplash.com/photo-1717684566059-4d16b456c72a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onChange={(e) => setImg(e.target.value)}
          value={img}
          required
        />
        <textarea
          className={`${styles.inputContent} ${styles.input}`}
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          required
        ></textarea>
        <div className={styles.btnContainer}>
          <BtnSecondary text={"Go back ⬅️"} to={"/"} />

          <BtnPrimary
            text={"Post Now 📤"}
            to={"/post"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
