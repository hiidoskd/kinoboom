import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Searchbar from '../Searchbar/Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <div className={styles.nav}>
    <div>
      <FontAwesomeIcon icon={faBars} />
      <Link>Kinoboom</Link>
    </div>
    <Searchbar />
    <Link>Войти</Link>
  </div>
)

export default Navbar
