import { useEffect, useState } from "react";
import styles from './Directory.module.css'
import FilterBar from "../../widgets/filterBar/FilterBar";
import ProfileCard from "../../widgets/profileCard/ProfileCard";

export default function Directory() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      let response = await fetch("http://localhost:5000/employees");
      let employees = await response.json();
      console.log(employees);
      setEmployeeList(employees);
      console.log(employeeList);
    }
    getAllEmployees();
  }, []);

  return (
    <div className={styles.directoryBox}>
      <p>Directory</p>
      <FilterBar />
      <div className={styles.userCardBox}>
      {employeeList.map((employee) => (
        <ProfileCard key={employee.id} {...employee} />
      ))}
      </div>
    </div>
  );
}
