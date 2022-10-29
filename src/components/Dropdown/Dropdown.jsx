import classNames from 'classnames'
import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen }) => {
  return (
    <div className={classNames(styles.dd, isOpen && styles.ddOpen)}>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
