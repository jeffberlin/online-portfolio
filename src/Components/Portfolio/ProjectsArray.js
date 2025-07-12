import bmtHomepagePhoto from './images/bmt-micro-homepage.jpg';
import bmtInfoPhoto from './images/bmt-micro-info.jpg';
import bmtAccessPhoto from './images/bmt-micro-access.jpg';
import bmtLogo from './images/bmt-micro-logo.jpg';
import trackRally from './images/track-and-rally.jpg';
import jbRacing from './images/jeff-berlin-racing.jpg';
import backToFlyer from './images/back-to-80s-flyer.jpg';
import spFlyer from './images/sp-30th.jpg';
import bmtBlogPhoto from './images/bmt-micro-blog.jpg';
import fourthFlyer from './images/may-4th-flyer.jpg';
import bmtCustomerHelp from './images/bmt-micro-help-customers.jpg';
import bmtVendorHelp from './images/bmt-micro-help-vendors.jpg';
import juracapressoDoctor from './images/juracapresso-doctor.jpg';
import bmtEmail from './images/bmt-micro-email-template.jpg';
import tcbWebsite from './images/tcb-website.jpg';
import tcbBrochure from './images/tcb-brochure.jpg';
import jomoWebsite from './images/jomo-website.jpg';
import jomoGiveaway from './images/jomo-charlotte-giveaway.jpg';
import jomoVideo from './images/jomo-video.jpg';
import jomoRep from './images/jomo-rep.jpg';
import appLogo1 from './images/app-logo-1.jpg';
import appLogo2 from './images/app-logo-2.jpg';
import ilmBrewLogo from './images/ilm-brew-logo.jpg';
import FoodTruckScreens from './images/food-truck-screens.jpg';
// import BMTappScreens from './images/bmt-app-screens.jpg';
import BMTappScreensNew from './images/bmt-app-screens_new.jpg'
import autoGaragePhoto from './images/auto-garage-landing-wireframe-400px.jpg';
import foodTruckCaseStudy from './images/food-truck-finder-case-study.jpg';
import roundedHotelPhoto from './images/rounded-hotel-wireframe-400px.jpg';

const projects = [
  {
    title: "BMT Micro App",
    image: BMTappScreensNew,
    url: "https://www.behance.net/gallery/230165753/BMT-Micro-Mobile-App",
    category: "Design, Prototype",
    description: "A sample project for a BMT Micro mobile app. These designs were created using Figma.",
    type: "on Behance",
    target: "_blank",
    id: "23"
  },
  {
    title: "Food Truck Finder Case Study",
    image: foodTruckCaseStudy,
    url: "https://www.behance.net/gallery/164446133/Food-Truck-Finder-App-Case-Study",
    category: "Design, Prototype",
    description: "This is the case study that describes my journey throughout the design process for the Food Truck Finder app. It includes some sketches, survey results, ideation, and high fidelity screens.",
    type: "on Behance",
    target: "_blank",
    id: "25"
  },
  {
    title: "Food Truck Finder",
    image: FoodTruckScreens,
    url: "/food-truck-finder-app",
    category: "Design, Prototype",
    description: "A Udacity UX Designer course project that I created using Figma for design and prototyping. These designs were brought to life after low-fidelity designs, user survey's, and usability testing. Zeplin was used to create the style guide.",
    type: "Protoype",
    target: "_self",
    id: "22"
  },
  {
    title: "BMT Micro Homepage",
    image: bmtHomepagePhoto,
    url: "https://www.bmtmicro.com/",
    category: "Development, Design",
    description: "A full-on overhaul of the BMT Micro, Inc. company website. This website was built using HTML/JSX, CSS, ReactJS, React-Router, and React-Bootstrap.",
    type: "Website",
    target: "_blank",
    id: "0"
  },
  {
    title: "Hotel Software Landing Page",
    image: roundedHotelPhoto,
    url: "https://www.figma.com/proto/necd3YOIBYPVfN09dArU4d/Rounded-Hotel?page-id=0%3A1&node-id=1%3A2&viewport=613%2C134%2C0.61&scaling=min-zoom",
    category: "Design",
    description: "Landing page wireframe for a hotel software company. Created using Figma.",
    type: "Prototype",
    target: "_blank",
    id: "27"
  },
  {
    title: "Auto Garage Landing Page",
    image: autoGaragePhoto,
    url: "/auto-garage-wireframe",
    category: "Design",
    description: "Wireframe for a landing page of an automotive shop. Created using Figma.",
    type: "Wireframe",
    target: "_self",
    id: "24"
  },
  {
    title: "BMT Micro Info Site",
    image: bmtInfoPhoto,
    url: "https://info.bmtmicro.com/",
    category: "Development, Design",
    description: "Complete redesign and rebuild of the BMT Micro info/customer service website using HTML/JSX, CSS, ReactJS, React-Router, and React-Bootstrap.",
    type: "Website",
    target: "_blank",
    id: "1"
  },
  {
    title: "BMT Micro Access Center",
    image: bmtAccessPhoto,
    url: "https://vendors.bmtmicro.com/",
    category: "Development, Design",
    description: "Completely redesigned the vendors, customers, and affiliates centers (same design pattern) for BMT Micro using HTML, CSS, Javascript, JSP, jQuery, and Bootstrap.",
    type: "Website",
    target: "_blank",
    id: "2"
  },
  {
    title: "BMT Micro Logo",
    image: bmtLogo,
    url: "/bmt-micro-logo",
    category: "Design",
    description: "Created a new company logo for BMT Micro using Adobe Photoshop and Illustrator that is starting to be rolled out through the new, redesigned websites.",
    type: "Logo",
    target: "_self",
    id: "3"
  },
  {
    title: "Track and Rally",
    image: trackRally,
    url: "https://www.trackandrally.com/",
    category: "Development, Design",
    description: "Created the logo and website for Track and Rally. The logo was created using Adobe Illustrator and the website was built in ReactJS, React-Router, React-Bootstrap, HTML, CSS, and NodeJS.",
    type: "Website",
    target: "_blank",
    id: "4"
  },
  {
    title: "Juracapresso Doctor",
    image: juracapressoDoctor,
    url: "https://jeffberlin.github.io/Juracapresso-Doctor/",
    category: "Development, Design",
    description: "A website and logo created for Juracapresso Doctor for selling specialty tools and replacement parts for espresso machines. The website was built using HTML, CSS, Bootstrap, AngularJS, JavaScript, and jQuery. The logo was created using Adobe Photoshop.",
    type: "Website",
    target: "_blank",
    id: "26"
  },
  {
    title: "Jeff Berlin Racing",
    image: jbRacing,
    url: "https://www.jeffberlinracing.com/",
    category: "Development, Design",
    description: "This website is for Jeff Berlin Racing and provides information about the journey. It was built using ReactJS, React-Router, React-Bootstrap, HTML, CSS, and NodeJS.",
    type: "Website",
    target: "_blank",
    id: "5"
  },
  {
    title: "Back To The 80's Flyer",
    image: backToFlyer,
    url: "/back-to-80-flyer",
    category: "Design",
    description: "The event flyer for DJ Straftanz's \"Back To The 80's\" show. This was created using Adobe Photoshop.",
    type: "Flyer",
    target: "_self",
    id: "6"
  },
  {
    title: "SPtheMC Birthday Flyer",
    image: spFlyer,
    url: "/sp-flyer",
    category: "Design",
    description: "Kroenke Sports & Entertainment's former in-arena host, Stephen Pond, approached me to create a flyer for his birthday events. This was created using Adobe Photoshop.",
    type: "Flyer",
    target: "_self",
    id: "7"
  },
  {
    title: "BMT Micro Blog",
    image: bmtBlogPhoto,
    url: "https://blog.bmtmicro.com",
    category: "Development, Design",
    description: "A redesigned blog webpage for BMT Micro, Inc. This site was created using WordPress, HTML, CSS, JavaScript, and jQuery.",
    type: "Website",
    target: "_blank",
    id: "8"
  },
  {
    title: "May the Fourth Flyer",
    image: fourthFlyer,
    url: "/may-4th-flyer",
    category: "Design",
    description: "The event flyer for DJ Straftanz's \"May the Fourth\" show. This was created using Adobe Photoshop.",
    type: "Flyer",
    target: "_self",
    id: "9"
  },
  {
    title: "BMT Micro Customer Help",
    image: bmtCustomerHelp,
    url: "https://help.bmtmicro.com/customers",
    category: "Development, Design",
    description: "Part of my job with BMT Micro, Inc. is to redesign and recreate old webpages to improve performance and UI/UX. This website is a redesigned FAQ/Help section for customers that was recreated in Wordpress, using HTML, CSS, JavaScript, and PHP.",
    type: "Website",
    target: "_blank",
    id: "10"
  },
  {
    title: "BMT Micro Vendor Help",
    image: bmtVendorHelp,
    url: "https://help.bmtmicro.com/vendors",
    category: "Development, Design",
    description: "Since starting at BMT Micro, Inc., I have taken old and outdated webpages and designs, and gave them a much needed face-lift. This particular website is a redesigned FAQ/Help section that was recreated in Wordpress, using HTML, CSS, JavaScript, and PHP.",
    type: "Website",
    target: "_blank",
    id: "11"
  },
  {
    title: "BMT Micro Email Template",
    image: bmtEmail,
    url: "/bmt-micro-email",
    category: "Development, Design",
    description: "This project is an HTML email template that is used for BMT Micro's automated email responses. The template was designed using Adobe XD.",
    type: "Design",
    target: "_self",
    id: "12"
  },
  {
    title: "TRU Colors Brewing Website",
    image: tcbWebsite,
    url: "https://jeffberlin.github.io/Tru_Colors_Brewing_updated/",
    category: "Development, Design",
    description: "This website provides info and insights for TCB with forms to allow future apprentices and contractors to sign up for the program. Built using HTML, CSS, Bootstrap 3, Javascript, jQuery, and Formspree.",
    type: "Website",
    target: "_blank",
    id: "13"
  },
  {
    title: "TRU Colors Brewing Brochure",
    image: tcbBrochure,
    url: "/tru-colors-brochure",
    category: "Design",
    description: "Created this company brochure to provide additional information about TRU Colors Brewing. This was made using Adobe InDesign and Photoshop.",
    type: "Brochure",
    target: "_self",
    id: "14"
  },
  {
    title: "JOMO Homepage",
    image: jomoWebsite,
    url: "https://jeffberlin.github.io/JOMO_website/index.html",
    category: "Development",
    description: "Before closing down, JOMO was a free mobile app start-up, geared towards creating a more active lifestyle for its users. This site was to help provide information and allow for easy signup/download for the app using HTML, CSS, Bootstrap 3, Javascript, jQuery, and Branch.",
    type: "Website",
    target: "_blank",
    id: "15"
  },
  {
    title: "JOMO Charlotte Giveaway",
    image: jomoGiveaway,
    url: "https://jeffberlin.github.io/JOMO_website/charlotte.html",
    category: "Development",
    description: "The JOMO Charlotte website provided users with a list of prizes and information on how to win them. Built using HTML, CSS, Bootstrap 3, Javascript, jQuery, Branch, and Vimeo embedding.",
    type: "Website",
    target: "_blank",
    id: "16"
  },
  {
    title: "JOMO Video Fade-out",
    image: jomoVideo,
    url: "/jomo-fadeout",
    category: "Design",
    description: "Created for the JOMO Charlotte prize giveaway videos to be used as the fade-out screen for each video. This was created with Adobe Photoshop.",
    type: "Image",
    target: "_self",
    id: "17"
  },
  {
    title: "JOMO Campus Rep",
    image: jomoRep,
    url: "https://jeffberlin.github.io/JOMO_website/rep.html",
    category: "Development",
    description: "This website was created to accumulate college campus representatives to help spread the word about the JOMO app and to create in-app events for other students to attend. It was built using HTML, CSS, Bootstrap 3, Javascript, jQuery, Formspree, and Branch.",
    type: "Website",
    target: "_blank",
    id: "18"
  },
  {
    title: "Appalachian Slab & Timber",
    image: appLogo1,
    url: "/appalachian-slab-timber",
    category: "Design",
    description: "A logo created for a North Carolina timber company using Adobe Illustrator and Photoshop.",
    type: "Image",
    target: "_self",
    id: "19"
  },
  {
    title: "Appalachian Slab & Timber",
    image: appLogo2,
    url: "/appalachian-slab-timber-logo",
    category: "Design",
    description: "This logo will be used by a North Carolina timber company to brand their logs. I created this logo using Adobe Illustrator and Photoshop.",
    type: "Image",
    target: "_self",
    id: "20"
  },
  {
    title: "Wilmington Brew Logo",
    image: ilmBrewLogo,
    url: "/wilmington-brew",
    category: "Design",
    description: "A logo for a project website that I created. This was created using Adobe Photoshop and Sketch.",
    type: "Image",
    target: "_self",
    id: "21"
  }
];

export default projects;
