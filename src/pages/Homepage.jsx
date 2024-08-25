import Main from '../components/Main';
import Navigation from '../components/Navigation';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <main className={styles.main}>
      <Navigation/>
      <Main/>
    </main>
  )
}



export default Homepage
