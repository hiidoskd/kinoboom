import classNames from 'classnames'
import styles from './Dropdown.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dropdown = ({ isOpen }) => {
  const menuItems = [
    { link: '/movies', name: 'Фильмы', icon: 'icon' },
    { link: '/series', name: 'Сериалы', icon: 'icon' },
    { link: '/animated', name: 'Мультфильмы', icon: 'icon' },
    { link: '/anime', name: 'Сериалы', icon: 'icon' }
  ]

  return (
    <div className={classNames(styles.dd, isOpen && styles.ddOpen)}>
      <ul>
        {menuItems.map(item => (
          <li>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
