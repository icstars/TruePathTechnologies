import React from 'react'
import styles from './MainButton.module.css'
export default function MainButton({text}) {
  return (
    <button className= {styles.btn}>{text}</button>
  )
}
