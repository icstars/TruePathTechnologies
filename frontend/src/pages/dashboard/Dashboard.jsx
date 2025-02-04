import { useEffect, useState } from "react";
import UpdatesCard from "../../widgets/UpdatesCard/UpdatesCard";
import styles from "./Dashboard.module.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventCard from "../../widgets/eventCard/EventCard";

export default function Dashboard() {
  let value = Date()
  const [eventList, setEventList] = useState([]);
  const [updateList, setUpdateList] = useState([]);

    useEffect(() => {
      async function getAllEvents() {
        let response = await fetch("http://localhost:5000/events");
        let events = await response.json();
        setEventList(events);
      }
      async function getAllNews() {
        let response = await fetch("http://localhost:5000/updates");
        let updates = await response.json();
        setUpdateList(updates);
      }
      getAllEvents();
      getAllNews();
    }, []);

  return (
    <div className={styles.dashboardBox}>
      
      <div className={styles.newsBox}>
      <p className={styles.dashTitles}>Updates</p>
        {
          eventList.map(item=><EventCard key={item.date} {...item}/>)
        }
      </div>
      <div className={styles.eventsBox}>
      <p className={styles.dashTitles}>Events</p>
        <Calendar showWeekNumbers value={value}/>
        <p className={styles.dashTitles}>News</p>
        <div >
        {
          updateList.map(item=><UpdatesCard key={item.date} {...item}/>)
        }
        </div>
      </div>
    </div>
  )
}
