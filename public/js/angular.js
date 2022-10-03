var app = angular.module('resume', []);

app.controller('resumeCtrl', function($scope, $document) {
    //$scope.myName = "Jeff" + " " + "Berlin";
  $scope.myName = function() {
  	return "Jeff" + " " + "Berlin"
  };
  $scope.headLine = "Web Developer";
  $scope.email = "jeff@jbrally.com";
  $scope.phone = "(302) 463-5129";
  $scope.location = "Wilmington, NC";

// Array for development skills
  $scope.developmentSkills = [
  	'HTML', 'CSS', 'Bootstrap', 'Foundation', 'Javascript', 'JQuery', 'KnockoutJS', 'React', 'React-Native', 'Redux', 'AngularJS', 'PHP', 'JSON', 'AJAX', 'GitHub', 'WordPress', 'Google Maps', 'RWD', 'Heroku', 'Cloudflare'
  ];

// Array for design skills
  $scope.designSkills = [
  	'Photoshop', 'Illustrator', 'InDesign', 'XD', 'Sketch'
  ];

// Array for design skills
  $scope.otherSkills = [
  	'Slack', 'Trello', 'MS 365', 'Automotive', 'Logistics', 'Analytics'
  ];

// Array for Work Experience
	$scope.workExperience = [
    {
      jobTitle: 'Web Developer',
      workDate: 'April 2018 - Present',
      company: 'BMT Micro, Inc.',
      companyURL: 'https://www.bmtmicro.com/',
      workLocation: 'Wilmington, NC',
      jobDescription: 'BMT Micro is an e-commerce company for software and game developers. We handle their shopping carts, payment transactions, sales tracking, and order fulfillment. My responsibilities include building, redesigning, and maintaining all company websites, our automated email template, our Wordpress plugin, and custom shopping carts. Since completion of the new company homepage, we have seen traffic triple!'
    },
		{
			jobTitle: 'UI/UX Developer (Contractor)',
			workDate: 'December 2017 - April 2018',
			company: 'TRU Colors Brewing Co.',
			companyURL: 'https://www.trucolors.co/',
			workLocation: 'Wilmington, NC',
			jobDescription: 'A local startup that will ultimately be run and operated by active gang members - working together to end gang-on-gang violence in our area. My primary responsibilities were to create their company website, consult on ad design questions, and create their brochure to distribute to potential partners. The technology I used to handle the work consists of HTML, CSS, Bootstrap, Javascript, JQuery, Photoshop, InDesign, Illustrator, and Sketch.'
		},
		{
			jobTitle: 'Front End Web Developer',
			workDate: 'January 2017 - December 2017',
			company: 'JOMO, Inc.',
			companyURL: 'https://jeffberlin.github.io/JOMO_website/index.html',
			workLocation: 'Wilmington, NC',
			jobDescription: 'JOMO was a local mobile app startup, where I was in charge of creating and maintaining their website and additional webpages. Aside from creating, updating, and maintaining the website, I was heavily involved in the daily graphic work that was used for advertising and website content. To create the website and ads, I relied on HTML, CSS, Bootstrap, Javascript, JQuery, Branch.io, Photoshop, Illustrator, and Sketch.'
		},
		{
			jobTitle: 'Operations Manager',
			workDate: 'September 2015 - January 2017',
			company: 'No Limit Customs',
			workLocation: 'North Myrtle Beach, SC',
			jobDescription: 'Even though No Limit Customs is a custom automotive shop, I was in charge of project scheduling, handling online sales, shipments, inventory, and also creating the designs used for the online shopping stores and advertisements.'
		},
		// {
		// 	jobTitle: 'Parts Associate',
		// 	workDate: 'July 2014 - June 2015',
		// 	company: 'Hadwin-White Buick, GMC, Subaru',
		// 	workLocation: 'Conway, SC',
		// 	jobDescription: 'Worked closely with the Parts Manager to ensure we were being as efficient and accurate as possible with our work. I handled all shipments, ordering, and assisting co-workers and customers with any parts needs.'
		// },
		// {
		// 	jobTitle: 'Night Manager',
		// 	workDate: 'September 2007 - July 2014',
		// 	company: 'J & P Management, Inc., DBA Jersey Mike\'s',
		// 	workLocation: 'North Myrtle Beach, SC',
		// 	jobDescription: 'Assigned duties for co-workers to have completed by the end of the shift, counted the money at the end of the shift, and handled any issues that may arise.'
		// }
	];

// Array for Education
	$scope.education = [
    // {
    //   schoolName: 'Udacity',
    //   schoolURL: 'https://www.udacity.com/course/c-plus-plus-nanodegree--nd213',
    //   course: 'C++ - Nanodegree/Certification',
    //   date: 'March 2019 - Present',
    //   courseInfo: 'Learning to build a route planner using OpenStreetMap data, write a process monitor for your computer, and implement your own smart pointers. Finally, showcasing all of the newfound skills by building a multithreaded traffic simulator and coding a personal C++ application.'
    // },
    {
			schoolName: 'Udacity',
			schoolURL: 'https://www.udacity.com/course/react-nanodegree--nd019',
			course: 'React Development - Nanodegree/Certification',
			date: 'June 2018 - October 2018',
			courseInfo: 'Learning the in\'s and out\'s of the React, React Native, and Redux frameworks through this course. To successfully complete the course, we had to complete 3 total projects, using each framework.'
		},
		{
			schoolName: 'Udacity',
			schoolURL: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
			course: 'Front End Web Development - Nanodegree/Certification',
			date: 'August 2016 - March 2017',
			courseInfo: 'Through this Front End Developer program, I learned how to become proficient using HTML, CSS, and Javascript. Some of the tools, skills, and languages I had to use in order to properly complete the course projects were: DOM manipulation, browser leveraging, Knockoutjs, Google Maps API, Pagespeed insights, responsive web design, and Jasmine Unit Testing.'
		},
		{
			schoolName: 'Horry-Georgetown Technical College',
			schoolURL: 'https://www.hgtc.edu',
			course: 'Digital Arts',
			date: 'January 2016 - January 2017',
			courseInfo: 'After taking a few graphic design classes, I became familiar with programs that include Adobe Photoshop, Illustrator, InDesign, and Sketch. These courses led to my interest in learning how to code.'
		}
	];

// Projects array to display images and info. Modal info is located in index.html
  $scope.projects = [
    {
      title: 'BMT Micro Homepage',
      image: './images/bmt-micro-homepage-screenshot-400.jpg',
      url: 'https://www.bmtmicro.com/',
      category: ['design', 'development'],
    // next lines are to handle the pop-up modals
      modalName: 'BmtHomepageModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'BmtHomepageModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'BmtHomepageModalLongTitle',
    // title to display in the modal
      modalTitleName: 'BMT Micro Homepage',
    // body inside the modal
      modalBody: 'A full-on overhaul of the BMT Micro, Inc. company website. This website was built using ReactJS, HTML, CSS, and Apache.',
    // handles the link description in modal
      modalViewType: 'Website'
    },
    {
      title: 'BMT Micro Info Site',
      image: './images/bmt-micro-customer-service-screenshot-400.jpg',
      url: 'https://info.bmtmicro.com/',
      category: ['design', 'development'],
    // next lines are to handle the pop-up modals
      modalName: 'BmtInfoSiteModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'BmtInfoSiteModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'BmtInfoSiteModalLongTitle',
    // title to display in the modal
      modalTitleName: 'BMT Micro Customer Service Site',
    // body inside the modal
      modalBody: 'Complete redesign and rebuild of the BMT Micro info/customer service website using HTML, CSS, ReactJS, and Bootstrap.',
    // handles the link description in modal
      modalViewType: 'Website'
    },
    {
      title: 'BMT Micro Access Center',
      image: './images/bmt-vendors-area-screenshot-400.jpg',
      url: 'https://vendors.bmtmicro.com/',
      category: ['design', 'development'],
    // next lines are to handle the pop-up modals
      modalName: 'BmtVendorsAreaModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'BmtVendorsAreaModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'BmtVendorsAreaModalLongTitle',
    // title to display in the modal
      modalTitleName: 'BMT Micro Access Center',
    // body inside the modal
      modalBody: 'Completely redesigned the vendors, customers, and affiliates centers (same design pattern) for BMT Micro using HTML, CSS, Javascript, JSP, JQuery, and Bootstrap.',
    // handles the link description in modal
      modalViewType: 'Website'
    },
    {
      title: 'BMT Micro Logo',
      image: './images/bmtmicro-logo-400.jpg',
      url: '/bmtmicro-logo',
      category: 'design',
    // next lines are to handle the pop-up modals
      modalName: 'BmtLogoModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'BmtLogoModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'BmtLogoModalLongTitle',
    // title to display in the modal
      modalTitleName: 'BMT Micro Logo',
    // body inside the modal
      modalBody: 'Created a new company logo for BMT Micro using Adobe Photoshop and Illustrator that is starting to be rolled out through the new, redesigned websites.',
    // handles the link description in modal
      modalViewType: 'Logo'
    },
    {
      title: 'Track and Rally',
      image: './images/track-and-rally-screenshot-400-min.jpg',
      url: 'https://www.trackandrally.com/',
      category: ['design', 'development'],
    // next lines are to handle the pop-up modals
      modalName: 'trackAndRallyModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'trackAndRallyModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'trackAndRallyModalLongTitle',
    // title to display in the modal
      modalTitleName: 'Track and Rally',
    // body inside the modal
      modalBody: 'Created the logo and website for Track and Rally. The logo was created using Adobe Illustrator and the website was built in ReactJS, HTML, CSS, NodeJS, and Bootstrap.',
    // handles the link description in modal
      modalViewType: 'Website'
    },
    {
      title: 'Biohazard Flyer',
      image: './images/biohazard-flyer-400-min.jpg',
      url: '/biohazard-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
      modalName: 'biohazarFlyerModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'biohazarFlyerModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'biohazarFlyerModalLongTitle',
    // title to display in the modal
      modalTitleName: 'Biohazard Flyer',
    // body inside the modal
      modalBody: 'The event flyer for DJ Straftanz\'s \'Biohazard\' show. This was created using Adobe Photoshop.',
    // handles the link description in modal
      modalViewType: 'Flyer'
    },
    {
			title: 'Jeff Berlin Racing',
			image: './images/jeff-berlin-racing-screenshot-400.jpg',
			url: 'https://www.jeffberlinracing.com/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'jeffBerlinRacingModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'jeffBerlinRacingModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'jeffBerlinRacingModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Jeff Berlin Racing',
		// body inside the modal
			modalBody: 'This website is for Jeff Berlin Racing and provides media coverage for their events. It was built using ReactJS, Bootstrap, and NodeJS.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
      title: 'Goth Industrial Night Flyer',
      image: './images/goth-industrial-night-flyer-400.jpg',
      url: '/goth-industrial-night-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
      modalName: 'gothIndustrialNightModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'gothIndustrialNightModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'gothIndustrialNightModalLongTitle',
    // title to display in the modal
      modalTitleName: 'Goth Industrial Night Flyer',
    // body inside the modal
      modalBody: 'The event flyer for DJ Straftanz\'s \'Goth Industrial Night\' show. This was created using Adobe Photoshop.',
    // handles the link description in modal
      modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'Back To The 80\'s Flyer',
      image: './images/back-to-80s-flyer-400.jpg',
      url: '/back-to-80s-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
      modalName: 'backTo80ModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'backTo80ModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'backTo80ModalLongTitle',
    // title to display in the modal
      modalTitleName: 'Back To The 80\'s Flyer',
    // body inside the modal
      modalBody: 'The event flyer for DJ Straftanz\'s \'Back To The 80\'s\' show. This was created using Adobe Photoshop.',
    // handles the link description in modal
      modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'Goth Night Christmas Flyer',
      image: './images/goth-night-christmas-flyer_400.jpg',
      url: '/goth-night-before-christmas-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
      modalName: 'gothChristmasModalCenter',
    // Just add 'Title' to modalName
      modalCenterTitle: 'gothChristmasModalCenterTitle',
    // remove 'Center', add 'Long'
      modalLongTitle: 'gothChristmasModalLongTitle',
    // title to display in the modal
      modalTitleName: 'Goth Night Before Christmas Flyer',
    // body inside the modal
      modalBody: 'The event flyer for DJ Straftanz\'s \'Goth Night Before Christmas\' show. This was created using Adobe Photoshop.',
    // handles the link description in modal
      modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'SP the MC Birthday Flyer',
      image: './images/sp_30th-400.jpg',
      url: '/sp-birthday-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
			modalName: 'spBirthdayModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'spBirthdayModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'spBirthdayModalLongTitle',
		// title to display in the modal
			modalTitleName: 'SP the MC 30th Birthday Flyer',
		// body inside the modal
			modalBody: 'Kroenke Sports & Entertainment\'s in-arena host, Stephen, approached me to create a flyer for his birthday events. This was created using Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'BMT Micro Blog',
      image: './images/bmt-micro-blog-screenshot-400.jpg',
      url: 'https://blog.bmtmicro.com',
      category: ['development', 'design'],
    // next lines are to handle the pop-up modals
			modalName: 'BmtBlogModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'BmtBlogModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'BmtBlogModalLongTitle',
		// title to display in the modal
			modalTitleName: 'BMT Micro Blog',
		// body inside the modal
			modalBody: 'A redesigned blog webpage for BMT Micro, Inc. This site was created using WordPress, HTML, CSS, JavaScript, and JQuery.',
		// handles the link description in modal
			modalViewType: 'Website'
    },
    {
      title: 'Gothic Industrial Madness',
      image: './images/gothic_industrial_madness_flyer-400.jpg',
      url: '/gothic-industrial-madness-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
			modalName: 'gothicIndustrialMadnessFlyerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'gothicIndustrialMadnessFlyerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'gothicIndustrialMadnessFlyerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'DJ Straftanz Event Flyer',
		// body inside the modal
			modalBody: 'The event flyer for DJ Straftanz\'s \'Gothic Industrial Madness\' show. This was created using Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'Oh My Goth Flyer',
      image: './images/oh-my-goth-flyer_400.jpg',
      url: '/oh-my-goth-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
			modalName: 'ohMyGothFlyerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'ohMyGothFlyerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'ohMyGothFlyerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'DJ Straftanz Event Flyer',
		// body inside the modal
			modalBody: 'The event flyer for DJ Straftanz\'s \'Oh My Goth\' show. This was created using Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'Midsummer Night Flyer',
      image: './images/midsummer_night_flyer-400.jpg',
      url: '/midsummer-night-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
			modalName: 'midsummerNightFlyerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'midsummerNightFlyerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'midsummerNightFlyerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'DJ Straftanz Event Flyer',
		// body inside the modal
			modalBody: 'The event flyer for DJ Straftanz\'s \'A Midsummer Night\'s Dream\' show. This was created using Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'May the Fourth Flyer',
      image: './images/may_4th_flyer-400.jpg',
      url: '/may-4th-flyer',
      category: 'design',
    // next lines are to handle the pop-up modals
			modalName: 'mayFourthFlyerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'mayFourthFlyerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'mayFourthFlyerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'DJ Straftanz Event Flyer',
		// body inside the modal
			modalBody: 'The event flyer for DJ Straftanz\'s \'May the Fourth\' show. This was created using Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Full-Size Flyer'
    },
    {
      title: 'BMT Micro Catalog',
      image: './images/bmt-micro-catalog-screenshot-400.jpg',
      url: 'https://www.bmtmicro.com/bmtcatalog',
      category: ['development', 'design'],
    // next lines are to handle the pop-up modals
			modalName: 'BmtCatalogModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'BmtCatalogModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'BmtCatalogModalLongTitle',
		// title to display in the modal
			modalTitleName: 'BMT Micro Product Catalog',
		// body inside the modal
			modalBody: 'BMT Micro loves to promote its software suppliers, so I recreated their online catalog to bring it more up-to-date. This redesigned product catalog website was recreated using HTML, CSS, Bootstrap, JavaScript, JQuery, and AngularJS.',
		// handles the link description in modal
			modalViewType: 'Website'
    },
    {
			title: 'BMT Micro Customer Help',
			image: './images/bmt-micro-help-customers-screenshot-400.jpg',
			url: 'https://help.bmtmicro.com/customers',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'BmtCustomerHelpModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'BmtCustomerHelpModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'BmtCustomerHelpModalLongTitle',
		// title to display in the modal
			modalTitleName: 'BMT Micro Customer Help Page',
		// body inside the modal
			modalBody: 'Part of my job with BMT Micro, Inc. is to redesign and recreate old webpages to improve performance and UI/UX. This website is a redesigned FAQ/Help section for customers that was recreated in Wordpress, using HTML, CSS, JavaScript, and PHP.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
			title: 'BMT Micro Vendor Help',
			image: './images/bmt-micro-help-vendors-screenshot-400.jpg',
			url: 'https://help.bmtmicro.com/vendors',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'BmtHelpModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'BmtHelpModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'BmtHelpModalLongTitle',
		// title to display in the modal
			modalTitleName: 'BMT Micro Vendor Help Page',
		// body inside the modal
			modalBody: 'Since starting at BMT Micro, Inc., I have taken old and outdated webpages and designs, and gave them a much needed face-lift. This particular website is a redesigned FAQ/Help section that was recreated in Wordpress, using HTML, CSS, JavaScript, and PHP.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
			title: 'Would You Rather',
			image: './images/would_you_rather_screenshot-400.jpg',
			url: '/would-you-rather',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'WouldYouModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'WouldYouModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'WouldYouModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Would You Rather React-Redux Project (Udacity)',
		// body inside the modal
			modalBody: 'Would You Rather was a Udacity React course project that allows users (in their backend server) to ask a "Would You Rather..." question with 2 options, answer the questions, see the votes for each question, and to view the leaderboard of the users. This was created using React, Redux, and Material-UI.',
		// handles the link description in modal
			modalViewType: 'Demo'
		},
    // {
		// 	title: 'UdaciCards',
		// 	image: './images/',
		// 	url: '',
		// 	category: ['development', 'design'],
		// // next lines are to handle the pop-up modals
		// 	modalName: 'UdaciCardsModalCenter',
		// // Just add 'Title' to modalName
		// 	modalCenterTitle: 'UdaciCardsModalCenterTitle',
		// // remove 'Center', add 'Long'
		// 	modalLongTitle: 'UdaciCardsModalLongTitle',
		// // title to display in the modal
		// 	modalTitleName: 'UdaciCards React Native Project (Udacity)',
		// // body inside the modal
		// 	modalBody: '',
		// // handles the link description in modal
		// 	modalViewType: 'Demo'
		// },
    {
			title: 'BMT Micro, Inc. Email',
			image: './images/bmt-micro-email-template-screenshot-400.jpg',
			url: './images/bmt-micro-email-template-screenshot.jpg',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'BmtEmailModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'BmtEmailModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'BmtEmailModalLongTitle',
		// title to display in the modal
			modalTitleName: 'BMT Micro Email Responses',
		// body inside the modal
			modalBody: 'This project is an HTML email template that is used for BMT Micro\'s automated email responses. The template was designed using Adobe XD.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
    {
			title: 'MyReads React',
			image: './images/my_reads_screenshot-400.jpg',
			url: '/my-reads',
			category: ['development'],
		// next lines are to handle the pop-up modals
			modalName: 'MyReadsModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'MyReadsModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'MyReadsModalLongTitle',
		// title to display in the modal
			modalTitleName: 'MyReads React Project (Udacity)',
		// body inside the modal
			modalBody: 'MyReads was a Udacity React course project that displays books (from their backend server) that allow you to change their status and search for new books!',
		// handles the link description in modal
			modalViewType: 'Demo'
		},
		{
			title: 'TRU Colors Brewing Co.',
			image: './images/tcb_screenshot-400.jpg',
			url: 'https://jeffberlin.github.io/Tru_Colors_Brewing_updated/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'TruColorsSiteModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'TruColorsSiteModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'TruColorsSiteModalLongTitle',
		// title to display in the modal
			modalTitleName: 'TRU Colors Brewing Website',
		// body inside the modal
			modalBody: 'This website provides info and insights for TCB with forms to allow future apprentices and contractors to sign up for the program. Built using HTML, CSS, Bootstrap 3, Javascript, JQuery, and Formspree.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JOMO',
			image: './images/jomo_screenshot-400.jpg',
			url: 'https://jeffberlin.github.io/JOMO_website/index.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoHomeModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoHomeModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoHomeModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Homepage',
		// body inside the modal
			modalBody: 'Before closing down, JOMO was a free mobile app start-up, geared towards creating a more active lifestyle for its users. This site was to help provide information and allow for easy signup/download for the app using HTML, CSS, Bootstrap 3, Javascript, JQuery, and Branch.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
			title: 'TCB Brochure',
			image: './images/tcb_brochure-400.jpg',
			url: './images/tru-colors-brochure.pdf',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'tcbBrochureModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'tcbBrochureModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'tcbBrochureModalLongTitle',
		// title to display in the modal
			modalTitleName: 'TRU Colors Brewing Brochure',
		// body inside the modal
			modalBody: 'Created this company brochure to provide additional information about TRU Colors Brewing. This was made using Adobe InDesign and Photoshop.',
		// handles the link description in modal
			modalViewType: 'PDF'
		},
		{
			title: 'JOMO Charlotte Giveaway',
			image: './images/jomo_charlotte_screenshot-400.jpg',
			url: 'https://jeffberlin.github.io/JOMO_website/charlotte.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoCharlotteModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoCharlotteModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoCharlotteModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Charlotte Giveaway Page',
		// body inside the modal
			modalBody: 'The JOMO Charlotte website provided users with a list of prizes and information on how to win them. Built using HTML, CSS, Bootstrap 3, Javascript, JQuery, Branch, and Vimeo embedding.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JOMO Video Fade-out',
			image: './images/video_fade_green_400.jpg',
			url: './images/video_fade_green.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'JomoFadeOutModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoFadeOutModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoFadeOutModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO Prizes Video Fade-Out',
		// body inside the modal
			modalBody: 'Created for the JOMO Charlotte prize giveaway videos to be used as the fade-out screen for each video. This was created with Adobe Photoshop.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'JOMO Campus Rep',
			image: './images/jomo_rep_screenshot-400.jpg',
			url: 'https://jeffberlin.github.io/JOMO_website/rep.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoRepModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoRepModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoRepModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Campus Rep Page',
		// body inside the modal
			modalBody: 'This website was created to accumulate college campus representatives to help spread the word about the JOMO app and to create in-app events for other students to attend. It was built using HTML, CSS, Bootstrap 3, Javascript, JQuery, Formspree, and Branch.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Wilmington Breweries',
			image: './images/wilm_brew_screenshot-400.jpg',
			url: 'https://jeffberlin.github.io/Wilmington-Breweries/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'wilmBrewModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'wilmBrewModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'wilmBrewModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Wilmington Breweries Website (coming soon)',
		// body inside the modal
			modalBody: 'Are you a craft beer enthusiast? This website was originally created as a course project for my Udacity Front End Web Development program, but I find that it comes in handy when you\'re just not quite sure where to grab some food or drinks (within the Wilmington, NC area). Built using HTML, CSS, Javascript, KnockoutJS, Google Maps API, and Foursquare API.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
			title: 'Appalachian Slab & Timber',
			image: './images/app_st_logo-400.jpg',
			url: './images/applogo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'appLogoModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'appLogoModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'appLogoModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Appalachian Slab & Timber Logo',
		// body inside the modal
			modalBody: 'A logo I created for a North Carolina timber company using Adobe Illustrator and Photoshop.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'Appalachian Slab & Timber',
			image: './images/app_brand_logo-400.jpg',
			url: './images/app_brandlogo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'appBrandModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'appBrandModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'appBrandModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Appalachian Slab & Timber Branding Logo',
		// body inside the modal
			modalBody: 'This logo will be used by a North Carolina timber company to brand their logs. I created this logo using Adobe Illustrator and Photoshop.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'Movie Trailers',
			image: './images/movie_trailers_screenshot.jpg',
			url: 'https://jeffberlin.github.io/Movie_Trailer_python/fresh_tomatoes.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'movieTrailerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'movieTrailerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'movieTrailerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Movie Trailer Website',
		// body inside the modal
			modalBody: 'A project that was completed for the Udacity Full Stack Development course that display my 6 favorite movies and their movie trailers. Built using HTML, CSS, Bootstrap, Python, and YouTube video embedding.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
    {
			title: 'Wilmington Brew Logo',
			image: './images/ilm_brew_logo-400.jpg',
			url: './images/ilm_brew_logo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'ilmBrewModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'ilmBrewCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'ilmBrewModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Wilmington Breweries Logo',
		// body inside the modal
			modalBody: 'A logo for a project website that I created. This was created using Adobe Photoshop and Sketch.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'Javascript Resume',
			image: './images/javascript_resume_screenshot.jpg',
			url: 'https://jeffberlin.github.io/javascript-resume/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'javascriptResumeModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'javascriptResumeCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'javascriptResumeModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Javascript Resume Website',
		// body inside the modal
			modalBody: 'An online resume that was created to show my work history, projects, and education. Built using Javascript, JQuery, HTML, CSS, and Google Maps API.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Frogger Javascript Game',
			image: './images/frogger_screenshot.jpg',
			url: 'https://jeffberlin.github.io/Frogger-JavaScript/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'froggerGameModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'froggerGameCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'froggerGameModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Frogger Javascript Game',
		// body inside the modal
			modalBody: 'Try playing this Frogger-like game that was built using Javascript.',
		// handles the link description in modal
			modalViewType: 'Website'
		},

	];

	// Removes projects from view
	$scope.removeProjectItem = function(project, event, index) {
		$scope.projects.splice(index, 1);
	};

	// Active tab
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};

	// Handles the portfolio tab change to ".active"
	$scope.header = document.getElementById("portfolio");
	$scope.activeTab = $scope.header.getElementsByClassName("filter");
	for (var i = 0; i < $scope.activeTab.length; i++) {
		$scope.activeTab[i].addEventListener("click", function() {
			$scope.current = document.getElementsByClassName("active");
			$scope.current[0].className = $scope.current[0].className.replace(" active", "");
			this.className += " active";
		});
	}

});

// Displays loading spinner
var myVar;
var loadingFunc = () => {
  myVar = setTimeout(showPage, 3000);
}
var showPage = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

/* JQuery code for the smooth scrolling on nav item clicks */

// Show the scrollTop button when user scrolls down page, else hide
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y >= 75) {
		$('#topcontrol').fadeIn();
	} else {
		$('#topcontrol').fadeOut();
	}
});

$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#top-page").offset().top
	}, 'slow')
})

$("#mobile-topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#top-page").offset().top
	}, 'slow')
})

$("#skills-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#skills").offset().top
	}, 'slow')
})

$("#mobile-skills-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#skills").offset().top
	}, 'slow')
})

$("#experience-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#experience").offset().top
	}, 'slow')
})

$("#mobile-experience-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#experience").offset().top
	}, 'slow')
})

$("#education-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 'slow')
})

$("#mobile-education-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 'slow')
})

$("#portfolio-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 'slow')
})

$("#mobile-portfolio-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 'slow')
})

// Background overlay on mobile menu
$('#navigation').click(function() {
	$(document).toggleClass('overlay')
})

// Code for portfolio modal's
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
