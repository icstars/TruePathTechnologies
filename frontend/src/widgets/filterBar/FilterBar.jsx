import React from "react";
import styles from './FilterBar.module.css';

export default function FilterBar() {

   return (
       <div className={styles.FilterBar}>
           <button onClick="">
           <div className={styles.svg}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="25" height="25" stroke-width="2">
                   <path d="M4 6l16 0"></path>
                   <path d="M4 12l16 0"></path>
                   <path d="M4 18l16 0"></path>
                </svg>
            </div>
            </button>
          <div className="Button">
            <form>
              <select name="office-location" id="office-location">
              <option hidden disabled selected value> -- select an option -- </option>
                <option>123 Example Drive</option>
                <option>750 N Orleans</option>
                <option>541 W Tuesday</option>
              </select>



              <select name="office-location" className="office-location">
              <option hidden disabled selected value> -- select an option -- </option>
                <option>IT</option>
                <option>IT</option>
                <option></option>
              </select>
            </form>

          </div>
        </div>
    );
}
