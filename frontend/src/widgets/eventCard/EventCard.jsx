import React from 'react'
import styles from './EventCard.module.css'

export default function EventCard({ title, date, description }){
  return (
    <div className={styles.eventCardBox}>
      <h3 className={styles.eventCardTitle}>{title}</h3>
      <p className={styles.eventCardDate}>{date}</p>
      <p className={styles.eventCardSummary}>{description}</p>
    </div>
  );
};
