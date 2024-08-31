import { Link } from "react-router-dom";
import styles from "./BtnSecondary.module.css";

function BtnSecondary({ text, to }) {
  return (
    <Link to={to} className={styles.btnSecondary}>
      {text}
    </Link>
  );
}

export default BtnSecondary;
