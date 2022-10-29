import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Searchbar from '../Searchbar/Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import classNames from 'classnames'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.nav}>
      <div
        className={classNames(styles.menu)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <FontAwesomeIcon className={styles.icon} icon={faBars} />
        <Link to="/" className={styles.logo}>
          KINOBOOM
        </Link>
        <Dropdown isOpen={isOpen} />
      </div>
      <Searchbar />
      <Link>Войти</Link>
    </div>
  )
}
export default Navbar
