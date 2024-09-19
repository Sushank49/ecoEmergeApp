import styles from "./BtnPrimary.module.css";
import { Link } from "react-router-dom";

function BtnPrimary({ to, text, onClick }) {
  return (
    <Link to={to} className={styles.btnPrimary} onClick={onClick}>
      {text}
    </Link>
  );
}

export default BtnPrimary;
