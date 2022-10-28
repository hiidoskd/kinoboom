import { useState } from 'react'
import styles from './Searchbar.module.css'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.searchbar}
        value={value}
        onChange={handleChange}
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
