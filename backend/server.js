import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express()
const port = 5000;
app.use(cors({ origin: 'http://localhost:5173' }));

const db = mysql.createConnection({
  host: 'thresholds-test.mysql.database.azure.com',
  user: 'test', 
  port: 3306, 
  password: 'test', 
  database: 'thresholds', 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// routes
app.get('/events', (req, res) => {
  res.json(events);
});

app.get('/updates', (req, res) => {
  res.json(updates);
});

app.get('/resources', (req, res) => {
  res.json(resources);
});


app.get('/employees', (req, res) => {
  const query = 'SELECT * FROM employees';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving tasks:', err);
      res.status(500).json({ error: 'Error retrieving tasks' });
    } else {
      console.log(typeof (results));
      res.json(results);
    }
  });
});

// starts the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const events = [
  {
    "id": 1,
    "title": "Building Resilience: Strategies for Personal and Team Growth",
    "description": "A workshop focused on strengthening resilience, providing tools for both personal and team growth to manage stress and build a supportive work environment.",
    "date": "2025-02-10"
  },
  {
    "id": 2,
    "title": "Mindfulness Practices for Workplace Well-Being",
    "description": "An interactive session on mindfulness techniques designed to help employees manage stress, improve focus, and foster mental well-being in the workplace.",
    "date": "2025-02-15"
  },
  {
    "id": 3,
    "title": "Effective Communication: Strengthening Team Relationships",
    "description": "This event will focus on enhancing communication skills within teams, helping employees develop stronger relationships and navigate difficult conversations effectively.",
    "date": "2025-02-20"
  },
  {
    "id": 4,
    "title": "Creating a Culture of Support: Peer Mentoring and Encouragement",
    "description": "A session dedicated to fostering a culture of support within the workplace, emphasizing the importance of peer mentoring and encouraging a positive, collaborative environment.",
    "date": "2025-02-25"
  }
];

const updates = [
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

const resources = [
  {
    "name": "Mind - Five Ways to Wellbeing",
    "url": "https://www.mind.org.uk/workplace/mental-health-at-work/five-ways-to-wellbeing/",
    "description": "Provides five key actions to improve mental wellbeing at work.",
    "category": "Productivity"
  },
  {
    "name": "SHRM - Mental Health, HR, and the Workplace",
    "url": "https://www.shrm.org/topics-tools/news/all-things-work/mental-health--hr-and-the-workplace",
    "description": "Covers workplace mental health issues and HR strategies for a supportive work environment.",
    "category": "Self-care"
  },
  {
    "name": "SAMHSA - Find Support",
    "url": "https://www.samhsa.gov/find-support",
    "description": "Offers resources for individuals seeking mental health and substance use support.",
    "category": "Professional growth"
  },
  {
    "name": "NIMH - Health Publications",
    "url": "https://www.nimh.nih.gov/health/publications",
    "description": "Provides educational resources on various mental health topics from the National Institute of Mental Health.",
    "category": "Workplace Mental Health"
  },
  {
    "name": "Illinois DHS - Mental Health Services",
    "url": "https://www.dhs.state.il.us/page.aspx?item=29763",
    "description": "Offers mental health services and resources provided by the Illinois Department of Human Services.",
    "category": "Crisis Support"
  }
];
