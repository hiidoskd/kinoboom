import classNames from 'classnames'
import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClapperboard,
  faFilm,
  faBoxArchive,
  faLaptop
} from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ isOpen }) => {
  const menuItems = [
    { link: '/movies', name: 'Фильмы', icon: faClapperboard },
    { link: '/series', name: 'Сериалы', icon: faFilm },
    { link: '/animated', name: 'Мультфильмы', icon: faBoxArchive },
    { link: '/anime', name: 'Аниме', icon: faLaptop }
  ]

  return (
    <div className={classNames(styles.dd, isOpen && styles.ddOpen)}>
      <ul>
        {menuItems.map(item => (
          <li key={item.name}>
            <Link to={item.link}>
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
