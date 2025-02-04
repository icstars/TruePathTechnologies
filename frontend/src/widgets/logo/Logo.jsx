import React from 'react'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoBox} >
      <img src="../../../public/logo1.png" alt="logo" />
      <span>ThresHub</span>
    </div>
  )
}
