import Navigation from "../components/Navigation";
import Form from "../components/Form";
import styles from "./Post.module.css";

function Post() {
  return (
    <>
      <section className={styles.post}>
        <Navigation />
        <div className={styles.container}>
          <h1 className={styles.headingPrimary}>Add Your Article Now</h1>
          <Form />
        </div>
      </section>
    </>
  );
}

export default Post;
