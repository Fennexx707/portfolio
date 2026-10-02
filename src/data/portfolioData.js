

export const ownerInfo = {
  firstName: 'Nuha',
  legalName: 'Nuha Noor', 
  title: 'Digital Health Engineering Student',
  email: 'nnoor9@my.centennialcollege.ca', 
  phone: '(647) 766-8771', 
  location: 'Toronto, Ontario',
  github: 'https://github.com/Fennexx707', 
  linkedin: 'https://www.linkedin.com/in/nuha-noor-undefined123/?isSelfProfile=true', 
};

export const missionStatement =
  'I want to hone my skills in web development, database design, and data visualization so I can help organizations make sense of their data and share it with the people who need it.';

export const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Me' },
]

export const projectList = [
  {
    title: 'Ontario COVID-19 Outbreak Dashboard',
    image: '/images/dashboard.png',
    imageAlt: 'Illustration of the covid-19 dashboard with charts and filters',
    tools: ['Tableau', 'Data visualization', 'Public health data'],
    role: 'I cleaned the Ontario outbreak data and built the charts and dashboard on my own.',
    outcome:
      'The final dashboard allows filtering of the outbreaks by place and period of time, thus making the trends easily visible without studying the spreadsheet.',
  },
  {
    title: 'Car Rental Database',
    image: '/images/database.png',
    imageAlt: 'Illustration of linked database tables',
    tools: ['Oracle SQL', 'Docker', 'Teamwork'],
    role: 'I worked with a team to design the tables, write the SQL, and get the Oracle database running in Docker.',
    outcome:
      'We implemented our assignment by producing a fully functional database that included all required tables, relationships, and queries.',
  },
  {
    title: 'Restaurant Website',
    image: '/images/restaurant.png',
    imageAlt: 'Illustration of a restaurant web page layout',
    tools: ['HTML', 'CSS', 'JavaScript'],
    role: 'I designed and coded a multi-page restaurant site, including the menu and contact pages.',
    outcome:
      'The result is a clean, responsive, and lively site that works on both phones and desktops.',
  },
]

export const educationList = [
  {
    school: 'Centennial College',
    credential: 'Digital Health Engineering',
    dates: 'In progress 2026-2028',
    details: 'Got enrolled at Centennial College and am currently pursuing a degree in Digital Health Engineering. The coursework includes web application development, Oracle databases, data visualization, health informatics standards including HL7, and programming in languages such as Python, C#, and Bash.',
    image: '/images/centennial.png',
    imageAlt: 'Centennial College campus',
  },
  {
    school: 'SATEC @ W.A. Porter Collegiate Institute',
    credential: 'Ontario Secondary School Diploma',
    dates: 'Graduated 2025',
    details: 'Graduated from high school, where I pursued an extensive curriculum geared towards academic and individual development. Was also part of the pottery club and the debate team, which helped me develop my creativity and communication skills!',
    image: '/images/highschool.png',
    imageAlt: 'High school campus',
  }, 
]

export const experienceList = [
  {
    role: 'Computer Literacy Instructor',
    summary:
      'Taught basic computer skills to elderly women, going at their pace and using plain language.',
  },
  {
    role: 'Cashier',
    summary: 'Handled payments and helped customers quickly and accurately in a busy setting.',
  },
  {
    role: 'Kitchen Team Member',
    summary: 'Worked as part of a fast-moving team where timing and communication mattered.',
  },
]

export const serviceList = [
  {
    title: 'Web Development',
    image: '/images/web.png',
    imageAlt: 'Browser window icon',
    description:
      'I build clean, mobile-friendly websites and single-page apps using React, HTML and CSS. I can set up a full multi-page site with navigation, forms and a layout that is easy to read, and I keep my code organized so it is simple to update later.',
  },
  {
    title: 'Database Design',
    image: '/images/service-database.png',
    imageAlt: 'Database icon',
    description:
      'I design Oracle SQL databases from the ground up, including tables, relationships, and the queries and subqueries needed to pull out the information you need. I can also set up your database in Docker so it runs the same way on any computer.',
  },
  {
    title: 'Data Visualization',
    image: '/images/data.png',
    imageAlt: 'Chart icon',
    description:
      'I turn messy spreadsheets and public data into clear Tableau dashboards with charts, maps and filters. I clean the data first, so what you see is accurate and easy to understand at a glance, even for people who do not work with numbers.',
  },
  {
    title: 'Computer Skills Tutoring',
    image: '/images/tutor.png',
    imageAlt: 'Person teaching icon',
    description:
      'I offer patient, one-on-one help for beginners who want to feel comfortable with computers. I have taught elderly women everything from using email to browsing safely, and I go at your pace, using plain language instead of tech jargon.',
  },
]