import { useEffect, useState } from "react";
import FilterBar from "../../widgets/filterBar/FilterBar";
import ProfileCard from "../../widgets/profileCard/ProfileCard";

export default function Directory() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      let response = await fetch("http://localhost:3000/employees");
      let employees = await response.json();
      console.log(employees);
      setEmployeeList(employees);
      console.log(employeeList);
    }
    getAllEmployees();
  }, []);

  return (
    <div>
      <p>Directory</p>
      <FilterBar />
      {employeeList.map((employee) => (
        <ProfileCard key={employee.id} {...employee} />
      ))}
    </div>
  );
}
