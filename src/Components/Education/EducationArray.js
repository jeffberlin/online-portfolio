import GoogleCourse1Cert from './images/GoogleUXDesign-Certificate-min.jpg'
import UXDesignCert from './images/udacity-ux-designer-certification.jpg';
import ReactCert from './images/Udacity-React-Certificate.jpg';
import FendCert from './images/Udacity-FEND-Certificate.jpg';

const education = [
  {
    name: "Coursera",
    url: "https://www.coursera.org/professional-certificates/google-ux-design",
    course: "Google UX Design Professional Certificate",
    start: "May 2023",
    end: "Present",
    description: "Follow the design process (empathize with users, define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs) to plan research studies, conduct interviews and usability studies, and synthesizing research results, and apply foundational UX concepts, like user-centered design, accessibility, and equity-focused design to build a mobile app, responsive web site, and cross-platform experience.",
    image: GoogleCourse1Cert,
    imageAlt: "Google Course 1 certificate image"
  },
  {
    name: "Udacity",
    url: "https://www.udacity.com/course/ux-designer-nanodegree--nd578",
    course: "UX Designer - Nanodegree/Certification",
    start: "November 2022",
    end: "January 2023",
    description: "Learned how to create a digital user experience that is ready to be handed off for development. Started by building familiarity and fluency with design research fundamentals to identify the user and the solutions they need. Used design sprints to take an idea from concept to low-fidelity prototype and turn low-fidelity prototype into a high-fidelity design, and improve its performance based on data.",
    image: UXDesignCert,
    imageAlt: "UX Designer Certification image"
  },
  {
    name: "Udacity",
    url: "https://www.udacity.com/course/react-nanodegree--nd019",
    course: "React Development - Nanodegree/Certification",
    start: "June 2018",
    end: "October 2018",
    description: "Learned the in's and out's of the React, React Native, and Redux frameworks through this course. To successfully complete the course, I had to complete 3 total projects, using each framework.",
    image: ReactCert,
    imageAlt: "React Development Certification image"

  },
  {
    name: "Udacity",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    course: "Front End Web Development - Nanodegree/Certification",
    start: "August 2016",
    end: "March 2017",
    description: "Through this Front End Developer program, I learned how to become proficient using HTML, CSS, and Javascript. Some of the tools, skills, and languages I had to use in order to properly complete the course projects were: DOM manipulation, browser leveraging, Knockoutjs, Google Maps API, Pagespeed insights, responsive web design, and Jasmine Unit Testing.",
    image: FendCert,
    imageAlt: "Front End Web Development Certification image"

  },
  {
    name: "Horry-Georgetown Technical College",
    url: "https://www.hgtc.edu/",
    course: "Digital Arts",
    start: "January 2016",
    end: "January 2017",
    description: "After taking a few graphic design classes, I became familiar with programs that include Adobe Photoshop, Illustrator, InDesign, and Sketch. These courses led to my interest in learning how to code.",
    removeImageStyle: "remove-edu-img-style",
    borderBottom: "remove-border-bottom"
  }
];

export default education;
