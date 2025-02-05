import React from 'react'
import styles from './ResourceCard.module.css'

export default function ResourceCard({name, url, category, description}) {
  return (
    <div className={styles.resourceCardBox}>
        <p className={styles.category}><i className="material-symbols-outlined">
category
</i>{category}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>Read more</a>
    </div>
  )
}
