import React from "react";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({
  display_name,
  department_code,
  job_title,
  office_location,
  street_address,
  city,
  postal_code,
  business_phone,
  email,
}) {
  return (
    <div className={styles.pfc}>
      <div className={styles.profileTitleWrap}>
        <img
      className={styles.profileCardImg}
        src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png"
        alt="User-Icon"
      />
      <div className={styles.profileTitle}>
        <h2>{display_name}</h2>
        <h2>{department_code}</h2>
        <p>{job_title}</p>
      </div>
      </div>
      

      <div className={styles.vl}></div>

      <div className={styles.bawdy}>
        <p className={styles.textWrap}><i className="material-symbols-outlined">domain</i> Thresholds</p>
        <p className={styles.textWrap}><i className="material-symbols-outlined">location_on</i>
          {`${street_address} ${office_location} ${postal_code} ${city}`}
        </p>    
        <p className={styles.textWrap}><i className="material-symbols-outlined">phone</i>{business_phone} </p>
        <p className={styles.textWrap}><i className="material-symbols-outlined">email</i> {email}</p>
      </div>
    </div>
  );
}
