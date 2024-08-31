import styles from "./Aside.module.css";
import RecentPosts from "./RecentPosts";

function Aside() {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.headingSecondary}>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "1.8rem",
            display: "inline-block",
            paddingRight: "1rem",
          }}
        >
          schedule
        </span>
        Recent Posts
      </h2>
      {/* make 5 recent posts visible */}
      <RecentPosts />
      <div className={styles.subscribe}>
        <a
          href="#"
          className={`${styles.nav__links} ${styles.btnCTA} ${styles.btnOpen}`}
        >
          Subscribe Now
        </a>
      </div>
    </aside>
  );
}

export default Aside;
