import UpdatesCard from "../../widgets/UpdatesCard/UpdatesCard";

export default function Dashboard() {
  const news = [
    {
      "title": "Thresholds Named a Chicago Tribune Top Workplace 2024",
      "date": "November 22, 2024",
      "summary": "For the 11th year in a row, Thresholds has been named a Chicago Tribune Top Workplace. The list is based solely on employee feedback gathered through an anonymous third-party survey.",
      "url": "https://www.thresholds.org/thresholds-named-a-chicago-tribune-top-workplace-2024"
    },
    {
      "title": "Illinois Declares October 2024 Recovery Support Celebration Month",
      "date": "October 23, 2024",
      "summary": "October 2024 is now Recovery Support Celebration Month in Illinois. Officially proclaimed by Governor JB Pritzker, the month honors the unique contributions individuals with lived experience bring to the mental health field.",
      "url": "https://www.thresholds.org/13197-2"
    },
    {
      "title": "Thresholds Requests Proposals for Audit and Tax Services – Open Invitation",
      "date": "September 3, 2024",
      "summary": "Thresholds is holding an open invitation for a three-year audit and tax proposal from CPA firms with experience providing audit and tax services to not-for-profit organizations.",
      "url": "https://www.thresholds.org/news-events"
    },
    {
      "title": "Sonya Massey: Say Her Name",
      "date": "August 2, 2024",
      "summary": "Thresholds expresses deep sorrow over the tragic death of Sonya Massey, a Black woman in mental health distress who was fatally shot by law enforcement after seeking help.",
      "url": "https://www.thresholds.org/news-events"
    },
    {
      "title": "Influential New Laws Expand Mental Healthcare in Illinois",
      "date": "June 11, 2024",
      "summary": "Thresholds announces the upcoming signage of several critical bills that will significantly improve access to quality care for Illinois residents.",
      "url": "https://www.thresholds.org/news-events"
    }
  ];

  return (
    <div>
      <p>Dashboard</p>
      {
        news.map(item=><UpdatesCard title={item.title} date={item.date}/>)
      }
    </div>
  )
}
