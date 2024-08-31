import styles from "./AddAside.module.css";
import BtnSecondary from "./BtnSecondary";

function AddAside() {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.aside__heading}>Want to add your own article?</h3>
      <ol className={styles.aside__list}>
        <li className={styles.aside__item}>Gather Content. 💻</li>
        <li className={styles.aside__item}>Fill out the form. 📧</li>
        <li className={styles.aside__item}>Post! ✅</li>
      </ol>
      <BtnSecondary text={"Add Now!"} to={"/post"} />
    </aside>
  );
}

export default AddAside;
