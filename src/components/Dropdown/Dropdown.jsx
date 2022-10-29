import classNames from 'classnames'
import styles from './Dropdown.module.css'
import { useState } from 'react'

const Dropdown = ({ isOpen }) => {
  const onMouseLeave = () => {}

  return (
    <div className={classNames(styles.dd, isOpen && styles.ddOpen)}>
      <ul>
        <li>Movies</li>
        <li>Series</li>
      </ul>
    </div>
  )
}

export default Dropdown
