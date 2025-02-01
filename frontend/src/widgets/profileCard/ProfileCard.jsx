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
      <div className={styles.profileSection}></div>
      <div className={styles.gradient}></div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png"
        alt="User-Icon"
      />
      <div className={styles.profileTitle}>
        <h1>{display_name}</h1>
        <h2>{department_code}</h2>
        <h2>{job_title}</h2>
      </div>
      <div className={styles.vl}></div>

      <div className={styles.bawdy}>
        <p>Company Name: Thresholds</p>
        <p>Office Location:{office_location}</p>
        <p>Street Address: {street_address}</p>
        <p>City: {city}</p>
        <p>Postal Code: {postal_code}</p>
        <p>Business Phone Number: {business_phone}</p>
        <p>Email: {business_phone}</p>
      </div>
    </div>
  );
}
