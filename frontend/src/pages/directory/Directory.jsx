import { useEffect, useState } from "react";
import styles from './Directory.module.css'
import FilterBar from "../../widgets/filterBar/FilterBar";
import ProfileCard from "../../widgets/profileCard/ProfileCard";


export default function Directory() {
  const [employeeList, setEmployeeList] = useState([]);
  const [filteredList, setFilteredList] = useState([]); // Use state for filtered employees
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedAdress, setSelectedAdress] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  function handleSelectChange(e) {
    
    const filteredEmployees = filteredList.filter(
      (item) =>
        item.job_title === e.target.value ||
        item.office_location === e.target.value ||
        item.department_code === e.target.value
    );
  
    // Update state to reflect filtered employees
    setFilteredList(filteredEmployees);
  }

  function resetFilters() {
    setSelectedAdress("")
    setSelectedTitle("")
    setSelectedDepartment("")
    setFilteredList(employeeList);
  }

  function onChangeHandler(e) {
    const query = e.target.value.toLowerCase();
    const newList = employeeList.filter((item) => 
      item.display_name.toLowerCase().includes(query)
    );

    setFilteredList(newList); // Update state to trigger re-render
  }

  useEffect(() => {
    async function getAllEmployees() {
      try {
        const response = await fetch("http://localhost:5000/employees");
        const employees = await response.json();
        

        setEmployeeList(employees);
        setFilteredList(employees);
        
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    getAllEmployees();
  }, []);

  return (
    <div className={styles.directoryBox}>
      <p className={styles.dashTitles}>Directory</p>
      <FilterBar onChangeHandler={onChangeHandler} selectedAdress={selectedAdress}
      setSelectedAdress={setSelectedAdress} selectedDepartment={selectedDepartment}
      setSelectedDepartment={selectedDepartment}
      selectedTitle={selectedTitle}
      setSelectedTitle={handleSelectChange}
      resetFilters={resetFilters}
      />
      <div className={styles.userCardBox}>
      {filteredList.map((employee) => (
          <ProfileCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  );
}
