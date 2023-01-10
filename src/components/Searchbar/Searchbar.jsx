import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons'
import styles from './Searchbar.module.css'
import classNames from 'classnames'

const Searchbar = () => {
  const navgigate = useNavigate()

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navgigate(`/search/${value}`)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchbar}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск..."
      />
      <button
        type="button"
        className={classNames(styles.btnClose, value && styles.btnCloseActive)}
        onClick={() => setValue('')}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <button type="button" className={classNames(styles.btnSearch)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  )
}

export default Searchbar
