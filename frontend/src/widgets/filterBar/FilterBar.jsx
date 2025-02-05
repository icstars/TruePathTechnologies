import React from "react";
import styles from './FilterBar.module.css';

export default function FilterBar({resetFilters, onChangeHandler, selectedAdress, setSelectedAdress, selectedDepartment, setSelectedDepartment, selectedTitle, setSelectedTitle}) {

  const titles = ['Community Support Specialist', 'Education and Employment Support Specialist', 'Nurse Care Coordinator', 'Director, Homeless Contracts Compliance', 'Intake Specialist - Masters', 'Program Director', 'Nurse Care Coordinator, CCBHC', 'Desk Clerk', 'Team Leader', 'Community Support Specialist - Masters', 'Crisis Support Specialist, Living Room', 'Intern', "Teacher's Aide, YAP", 'Team Leader, Revenue Cycle Management', 'Team Leader, CST']

  const departmentCodes = ['0654', '0228', '0630', '0917', '0051', '0590', '0509', '0515', '0330', '0175', '0311', '0542', '0750', '1120', '0621', '0542', '0099', '0940', '0072', '0092', '0936', '0379', '0378']
  
  const offices = ['Lakeview Health Center', 'Phyllis and Perry Schwartz Center for Integrated Health', '4423 N Ravenswood Ave', '3638 S Kedzie Ave', '619 W 15Th St', '5493 S Cornell Ave #99', '12145 Western Ave', '1819 N Humboldt Blvd', '4656 S Emerald Ave', '4101 N Ravenswood Ave', '4219 N Lincoln Ave', '6337 S Woodlawn', '120 S Lasalle St Ste 1410', '2030 N Seminary Ave']

  

   return (
       <div className={styles.filterBar}>
          <div className={styles.filterBox}>

              <div className={styles.inputWrapper}>
                <input type="text" onChange={onChangeHandler}/>
                <i className="material-symbols-outlined">search</i>
              </div>
              <select name="title" className="department" value={selectedTitle} onChange={setSelectedTitle}>
              <option hidden disabled selected value>Title</option>
                {
                  titles.map((title, index)=> <option key={index}>{title}</option>)
                }
              </select>
              <select name="department" className="department" value={selectedDepartment} onChange={setSelectedTitle}>
              <option hidden disabled selected value>Department</option>
                {
                  departmentCodes.map((item, index)=> <option key={index}>{item}</option>)
                }
              </select>

              <select name="office-location" className="office-location" value={selectedAdress} onChange={setSelectedTitle}>
              <option hidden disabled selected value>Office Location</option>
                {
                  offices.map((item, index)=> <option key={index}>{item}</option>)
                }
              </select>
              <button onClick={resetFilters}>reset</button>
          </div>
        </div>
    );
}
