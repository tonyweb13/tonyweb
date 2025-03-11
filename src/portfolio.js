/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tony's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tony Juntila's Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Tony Juntila",
  logo_name: "TonyJuntila",
  nickname: "Tony",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Wkhl7O7DnSBEIlZxy24UOuBLUUmUCgZn/view",
  portfolio_repository: "https://github.com/tonyweb13?tab=repositories",
  githubProfile: "https://github.com/tonyweb13",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tonyweb13",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/tony-juntila-119613207?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BtMQXE7FS9uV3TkCaUoFlQ%3D%3D",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:TonyWeb13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Skype",
    link: "https://join.skype.com/invite/KDsjZire5Kpn",
    fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "blue", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building mobile responsive website front end and backend",
        "⚡ Developing web application",
        "⚡ Creating backend Restful API",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Yii",
          fontAwesomeClassname: "simple-icons:yii",
          style: {
            color: "#40B3D8",
          },
        },
        {
          skillName: "CodeIgniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#EF4223",
          },
        },
        // {
        //   skillName: "Vue.js",
        //   fontAwesomeClassname: "fa-brands fa-vuejs",
        //   style: {
        //     color: "#42b883"
        //   }
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Quasar",
          fontAwesomeClassname: "simple-icons:quasar",
          style: {
            color: "#050A14",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
      ],
    },
    {
      title: "Databases",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable data ready",
        "⚡ Database designing and query optimization techniques",
        "⚡ Complex quantitative modelling databases",
      ],
      softwareSkills: [
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MSSQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#003545",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#2F61B4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
      ],
    },
    {
      title: "Content Management System",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing CMS designs and building CMS from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Magento",
          fontAwesomeClassname: "simple-icons:magento",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "LimeSurvey",
          fontAwesomeClassname: "simple-icons:limesurvey",
          style: {
            color: "#14AE5C",
          },
        },
        {
          skillName: "Joomla",
          fontAwesomeClassname: "simple-icons:joomla",
          style: {
            color: "#5091CD",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying and Setting up server models on cloud",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "XAMMP",
          fontAwesomeClassname: "simple-icons:xampp",
          style: {
            color: "#FB7A24",
          },
        },
        {
          skillName: "Laragon",
          fontAwesomeClassname: "simple-icons:laragon",
          style: {
            color: "#0E83CD",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#FF4438",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I have worked with many evolving startups or BPO Company in IT industries. I have also worked with some well established companies mostly as Web Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Senior Web Developer",
          company: "FlatPlanet Corp.",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "October 2022 - Present",
          location: "Makati City, Philippines",
          description:
            "Project/Client: SLSA (Australia). Major Skills/Tools: NestJs, Yii, Laravel, VueJs, Mysql Workbench, SQL Developer, VS Code, Jira, Sourcetree, Git, Npm, Nodejs, NestJs, TypeOrm, TypeScript, Javascript, Soap API, Rest API, Quasar.",
          color: "#000000",
        },
        {
          title: "Application Development Associate Manager",
          company: "ACCENTURE Inc.",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "March 2022 – September 2022",
          location: "Taguig City, Philippines",
          description:
            "Project/Cllient: Avaloq an NEC Company (Europe). Major Skills/Tools: Angular 11, Typescript, Developer Virtual Machine, Citrix Workspace, Avaloq SmartClient, ICE Workbench, SQL Developer, VS Code, Jira, HP Quality Center, Sourcetree, Git, Npm 6, Nodejs 14.",
          color: "#0879bf",
        },
        {
          title: "Team Lead/Senior Web Developer",
          company: "ARB Call Facilities",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "July 2016 – March 2022",
          location: "Taguig City, Philippines",
          description:
            "Project Websites: Intranet Call Center System that customize on their needs and specific role to that company. Agent Call Dialler System, HR System, Email Campaign System, Internal Centralize System, Vertical Private System, Behavioral Management System, Credit Card Monitoring System. Major Skills/Tools: Laravel 5.5 LTS Framework, Kohana Framework, OctoberCMS, Wordpress, API RestFul, AngularJS, Jquery, Ajax, Json, Bootstrap, VueJs, MailChimp, SendGrid, AWS Services, Linux Server, MSSQL, MYSQL, Git, SourceTree, Phpstorm, Sublime, VSCode, Docker, Laradock.",
          color: "#9b1578",
        },
        {
          title: "PHP Programmer",
          company: "TECHGAMBIT / ZAPPORT SERVICES INC.",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "March 2015 – March 2016",
          location:
            "Bangkok Thailand, BGC Taguig PH, Ortigas Pasig City PH, Makati City PH.",
          description:
            "Major Skills: Laravel 5.2 Framework, API Rest, AngularJS, Jquery, Ajax, Json, Bootstrap, WePay Payment Integration, Vpay Payment Integration, PayPal Payment Integration, Git, Scrum, Linux Server.",
          color: "#fc1f20",
        },
        {
          title: "PHP Programmer",
          company: "PUBLICIS GROUP MANILA",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "May 2014 - March 2015",
          location: "Makati City Philippines",
          description:
            "Major Skills: Yii 1.1.14 Framework, Yii Booster, Twitter Bootstrap, Ajax, Jquery, Json, Netbeans, Git, Scrum",
          color: "#fc1f20",
        },
        {
          title: "ORACLE PL/SQL, PHP Programmer",
          company: "ABS-CBN BROADCASTING CORPORATION",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "October 2011 – May 2014",
          location: "Timog Avenue Quezon City Philippines",
          description:
            "Projects: Sky Cable, Bayantel, ABS-CBN Mobile, IWANTV, TFC Subscriber, TV shows like Immortal, KrisTV, etc. Major Skills: ECD ETL, Oracle, PLSQL, IBM Websphere DataStage 8.7, Data Monthly Loading Reports, VtigerCRM, LimeSurvey CMS, Jquery, Javascript, Ajax,",
          color: "#fc1f20",
        },
        {
          title: "PHP Programmer",
          company: "OPEN-ACCESS",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "July 2010 – August 2011",
          location: "Metro Manila, Philippines",
          description:
            "Major Skills: PHP, Mysql, CodeIgniter 2.0.2 Framework, Linux, HTML, CSS, Jquery, Ajax, Photoshop CS3",
          color: "#fc1f20",
        },
        {
          title: "PHP Programmer",
          company: "FRESHINSITE",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "January 2009 – June 2010",
          location: "Metro Manila, Philippines",
          description:
            "Major Skills: CodeIgniter 2.0.2 Framework, PayPal, Magento, Wordpress, Silverstripe CMS, Trello, Xampp, Lamp, HTML, CSS, Javascript, Jquery, Photoshop CS3",
          color: "#fc1f20",
        },
        {
          title: "Management Information System, Electronic Data Processing",
          company: "TRI NOVAHORIZONS INC / SUPREMECARE CORPORATION",
          company_url: "",
          logo_path: "gcp_logo.png",
          duration: "January 2009 – June 2010",
          location: "Metro Manila, Philippines",
          description:
            "Major Skills: PHP, MySql, Wamp, Html, Css, Javascript, Network Administrator, Technical support hardware and software, Windows Server, System Administrator, Technical support hardware and software.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web application projects and deploy using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available through phone call or email and you can message me in Skype, Zoom, Telegram, WhatsApp, Viber, Teams. I will reply ASAP. I can help you with Web Application Development.",
  },
  blogSection: {
    title: "Web Developer",
    subtitle:
      "I have 10+ years experience in PHP. I'm excellent in problem-solving and debugging code. Can work alone without supervision. Able to accomplish work remotely with good internet connection provider. Able to work with multiple projects simultaneously. Collaborate with other developers, designers, and stakeholders to deliver high-quality products.",
    link: "",
    avatar_image_path: "photoresume.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Binan City Laguna, Philippines 4024",
    locality: "Laguna",
    country: "Philippines",
    region: "Laguna",
    postalCode: "4024",
    streetAddress: "Binan City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/HLoEheX6peLb4Jo57",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
