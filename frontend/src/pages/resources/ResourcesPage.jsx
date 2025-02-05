import { useEffect, useState } from "react";
import styles from "./ResourcesPage.module.css"
import ResourceCard from "../../widgets/resourceCard/ResourceCard";

export default function ResourcesPage() {
    const [resourcesList, setResourcesList] = useState([]);
  
      useEffect(() => {
        async function getAllResources() {
          let response = await fetch("http://localhost:5000/resources");
          let resources = await response.json();
          setResourcesList(resources);
        }
        getAllResources();
      }, []);

  return (
    <div className={styles.resourcesPage}>
      <p className={styles.dashTitles}>Resources</p>
      <div>
        {
          resourcesList.map((item, index)=> <ResourceCard key={index} {...item}/>)
        }
      </div>
      
    </div>
  )
}
