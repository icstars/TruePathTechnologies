import React from "react";
import styles from "./UserProfileCard.module.css";

const UserProfileCard = ({ profilePicture, userName }) => {
  return (
    <div className={styles.userProfileCard}>
      <img
        src={
          profilePicture ||
          "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
        }
        alt={`${userName}'s profile`}
        className={styles.userProfileImage}
      />
      <span className={styles.userProfileName}>{userName || "Jon Doe"}</span>
    </div>
  );
};

export default UserProfileCard;
