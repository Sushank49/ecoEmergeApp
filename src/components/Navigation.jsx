import styles from './Navigation.module.css';

import { NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li><NavLink to='/Home'>Home</NavLink></li>
        <li><NavLink to='/Home'>Home</NavLink> </li>
        <li><NavLink to='/Home'>Home</NavLink></li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <NavLink />My account
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
