import React from "react";
import styles from './ProfileCard.module.css';

export default function ProfileCard() { 
    return (
        <div className={styles.pfc}>
            <div className= {styles.profileSection}></div>
            <div className={styles.gradient}></div>
            <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" 
                alt="User-Icon"
            />
            <div className={styles.profileTitle}>
                <h1>Employee Name</h1>
                <h2>Department</h2>
                <h2>Employee Title</h2>
            </div>
            <div className={styles.vl}></div>

         <div className={styles.bawdy}> 
            <p>Company Name:</p>
            <p>Office Location:</p>
            <p>Street Address:</p>
            <p>City</p>
            <p>Postal Code:</p>
            <p>Business Phone Number:</p>
            <p>Employee ID:</p>
            <p>Email:</p>        
        </div> 

        <div className={styles.btn2}>
        <button text="hello">Close</button>
        </div>
        
        </div>
    );
}

