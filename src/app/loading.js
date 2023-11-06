import React from 'react'
import styles from './loading.module.css'

const loading = () => {
  return (
    <div className="w-full h-screen bg-main-dark flex justify-center items-center">
          <h1 className={styles.h1}>Loading...</h1>
    </div>
  )
}

export default loading