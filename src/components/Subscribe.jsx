import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <form className={styles.form}>
        <h4 className={styles.form__heading}>Join Now!</h4>
        <span
          className={`${styles.materialSymbolsOutlined} ${styles.form__close}`}
        >
          close
        </span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          className={styles.form__input}
          required
        />
        <label className={styles.form__label} htmlFor="name">
          Full name
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          className={styles.form__input}
          required
        />
        <label className={styles.form__label} htmlFor="email">
          Your email
        </label>
        <br />
        <button type="submit" className={styles.subscribe__btn}>
          Join Now!
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
