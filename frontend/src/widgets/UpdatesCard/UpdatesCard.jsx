import React from "react";
import styles from "./UpdatesCard.module.css"

const UpdatesCard = ({ title, date, summary, link }) => {
  return (
    <div className={styles.updatesCardBox}>
      <h3 className={styles.updatesCardTitle}>{title}</h3>
      <p className={styles.updatesCardDate}>{date}</p>
      <p className={styles.updatesCardSummary}>{summary}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.updatesCardLink}
      >
        Read More
      </a>
    </div>
  );
};

export default UpdatesCard;
