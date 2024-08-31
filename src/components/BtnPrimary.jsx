import styles from "./BtnPrimary.module.css";
import { Link } from "react-router-dom";

function BtnPrimary({ to, text }) {
  return (
    <Link to={to} className={styles.btnPrimary}>
      {text}
    </Link>
  );
}

export default BtnPrimary;
