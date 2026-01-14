import React from 'react'


import styles from './Header.module.css'


const Header = () => { 

  return (
    <div className={styles.header}>
      <span className={styles.title}>
        Добро пожаловать, приложение №3 запущено!
      </span>
    </div>
  )
}

export default Header
