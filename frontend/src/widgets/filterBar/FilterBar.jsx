import React from "react";
import styles from './FilterBar.module.css';

export default function FilterBar() {

   return (
       <div className={styles.FilterBar}>
          <div className="Button">
            <form>
              <select name="department" className="department">
              <option hidden disabled selected value>Department</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>IT</option>
                <option>Legal</option>
              </select>

              <select name="office-location" className="office-location">
              <option hidden disabled selected value>Office Location</option>
                <option>241 Example Place</option>
                <option>100 Employment Drive</option>
                <option>750 North Orleans</option>
                <option>215 South State</option>
              </select>

              <input type="submit" />
              
            </form>
          </div>
        </div>
    );
}
