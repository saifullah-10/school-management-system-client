 const department = [
   {
     deptName: "Computer Science",
     deptDetails: `Our Computer Science department offers cutting-edge programs with 
                15 years of experience in shaping future tech leaders. We provide
                a comprehensive curriculum that balances theoretical foundations
                with practical applications in AI, machine learning, and software engineering.`,
     deptFeatures: [
       "Innovative AI and Machine Learning Labs",
       "Industry-partnered Internship Programs",
       "Hackathons and Coding Competitions",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     isReverse: true,
   },
   {
     isReverse: false,
     deptName: "Business Administration",
     deptDetails: `The Business Administration department has been cultivating business 
                leaders for over 25 years. Our programs cover finance, marketing, 
                management, and entrepreneurship, preparing students for the 
                dynamic global business environment.`,
     deptFeatures: [
       "Bloomberg Terminal Access",
       "Executive Mentorship Program",
       "International Business Simulations",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: true,
     deptName: "Law",
     deptDetails: `Our Law department, with a rich 30-year history, offers comprehensive 
                legal education covering national and international law. We focus on 
                developing critical thinking, ethical reasoning, and practical legal skills.`,
     deptFeatures: [
       "Mock Trial Competitions",
       "Legal Clinics for Community Service",
       "Specialized Tracks in Corporate, Criminal, and International Law",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: false,
     deptName: "Electrical Engineering",
     deptDetails: `The Electrical Engineering department has been at the forefront of 
                technological innovation for 20 years. Our curriculum spans from 
                microelectronics to power systems, emphasizing hands-on learning 
                and cutting-edge research.`,
     deptFeatures: [
       "State-of-the-art Robotics Laboratory",
       "Renewable Energy Research Center",
       "Industry-sponsored Capstone Projects",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: true,
     deptName: "Mathematics",
     deptDetails: `Our Mathematics department has a 40-year legacy of excellence in 
                mathematical education and research. We offer programs in pure and 
                applied mathematics, preparing students for careers in academia, 
                industry, and beyond.`,
     deptFeatures: [
       "Advanced Computational Facilities",
       "Interdisciplinary Research Opportunities",
       "Mathematics Olympiad Training",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: false,
     deptName: "Economics",
     deptDetails: `The Economics department, established 35 years ago, provides a rigorous 
                foundation in economic theory and its applications. Our programs 
                emphasize data analysis, policy evaluation, and global economic issues.`,
     deptFeatures: [
       "Economic Policy Think Tank",
       "Econometrics and Data Analysis Lab",
       "Federal Reserve Challenge Team",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: true,
     deptName: "Biology",
     deptDetails: `Our Biology department has been unraveling the mysteries of life for 
                over 50 years. From molecular biology to ecology, we offer diverse 
                programs that combine theoretical knowledge with practical research experience.`,
     deptFeatures: [
       "Genomics and Bioinformatics Center",
       "Marine Biology Research Station",
       "Biotechnology Entrepreneurship Program",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: false,
     deptName: "Psychology",
     deptDetails: `The Psychology department, with 30 years of excellence, explores the 
                complexities of human behavior and mental processes. Our programs 
                span clinical, cognitive, developmental, and social psychology.`,
     deptFeatures: [
       "Cognitive Neuroscience Laboratory",
       "Child Development Research Center",
       "Community Mental Health Clinic",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
     isReverse: true,
     deptName: "Environmental Science",
     deptDetails: `Our Environmental Science department, founded 25 years ago, is dedicated 
                to understanding and protecting our planet. We offer interdisciplinary 
                programs that address pressing global environmental challenges.`,
     deptFeatures: [
       "Climate Change Research Institute",
       "Environmental Policy Think Tank",
       "Sustainability Field Studies Program",
     ],
     deptImage:
       "https://images.unsplash.com/photo-1638036236212-db081c88c17c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
 ];
  


export default department;
