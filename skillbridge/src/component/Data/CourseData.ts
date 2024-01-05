import { webDesignImage, uiuxImage, frontEndImage, mobileDevelopmentImage,advanceJsImage, graphicDesignImage } from "../../assets/resource/imgResource";

export const Courselist = [
      {
        id: 1,
        weeks:'4 weeks',
        difficulty_level : 'Intermediate',
        instructor : 'By John Smith',
        title : 'Web Design Fundamentals',
        desc :'Learn the fundamentals of web design,including HTML, CSS, and responsive design principles.Develop the skills to create visually appealing and user-friendly websites.',
        image : `${webDesignImage}`
      },
      {
        id: 2,
        weeks:'6 weeks',
        difficulty_level:'Intermediate',
        instructor : 'By Emily Johnson',
        title : 'UI/UX Design',
        desc : 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping,and usability testing techniques.',
        image :`${uiuxImage}`
      },
      {
        id: 3,
        weeks:'8 weeks',
        difficulty_level:'Intermediate',
        instructor : 'By David Brown',
        title : 'Mobile App Development',
        desc : 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
        image : `${mobileDevelopmentImage}`
      },
      {
        id: 4,
        weeks:'12 weeks',
        difficulty_level:'Beginner',
        instructor : 'By Sarah Thompson',
        title : 'Graphic Design for Beginners',
        desc : 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
        image : `${graphicDesignImage}`
      },
      {
        id: 5,
        weeks:'10 weeks',
        difficulty_level:'Intermediate',
        instructor : 'By Michael Adams',
        title : 'Front-End Web Development',
        desc : 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
        image : `${frontEndImage}`
      },
      {
        id: 6,
        weeks:'6 weeks',
        difficulty_level:'Advance',
        instructor : 'By Jennifer Wilson',
        title : 'Advanced JavaScript',
        desc : 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features.Build complex applications with confidence.',
        image : `${advanceJsImage}`
      }
];