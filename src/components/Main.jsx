import AddAside from "./AddAside";
import Articles from "./Articles";
import Aside from "./Aside";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <Aside />
      <Articles />
      <AddAside />
    </div>
  );
}

export default Main;
