import webDesignImage1 from '../../assets/img/web_design_fundamentals_1.svg';
import webDesignImage2 from '../../assets/img/web_design_fundamentals_2.svg';
import webDesignImage3 from '../../assets/img/web_design_fundamentals_3.svg';
import UIUXImage1 from '../../assets/img/ui_ux_1.svg';
import UIUXImage2 from '../../assets/img/ui_ux_2.svg';
import UIUXImage3 from '../../assets/img/ui_ux_3.svg';
import MobileDevelopmentImage1 from '../../assets/img/mobile_app_development_1.svg';
import MobileDevelopmentImage2 from '../../assets/img/mobile_app_development_2.svg';
import MobileDevelopmentImage3 from '../../assets/img/mobile_app_development_3.svg';
import graphicDesignImage1 from '../../assets/img/graphic_design_1.svg';
import graphicDesignImage2 from '../../assets/img/graphic_design_2.svg';
import graphicDesignImage3 from '../../assets/img/graphic_design_3.svg';
import frontEndDevelopmentImage1 from '../../assets/img/front_end_development_1.svg';
import frontEndDevelopmentImage2 from '../../assets/img/front_end_development_2.svg';
import frontEndDevelopmentImage3 from '../../assets/img/front_end_development_3.svg';


export const CourseList = [
    {
        id:1,
        title:"Web Design Fundamentals",
        content:"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        topics: [
                "Introduction to HTML",
                "Styling with CSS",
                "Introduction to Responsive Design",
                "Design Principles for Web",
                "Building a Basic Website"
        ],
        duration: "4 weeks",
        difficulty_level : "Intermediate",
        instructor:"By John Smith",
        images : [
            `${webDesignImage1}`,`${webDesignImage2}`,`${webDesignImage3}`
        ]
    },
    {
        id:2,
        title:"UI/UX Design",
        content:"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        topics: [
                "Introduction to UI/UX Design",
                "User Research and Personas",
                "Wireframing and Prototyping",
                "Visual Design and Branding",
                "Usability Testing and Iteration"
        ],
        duration: "6 weeks",
        difficulty_level : "Intermediate",
        instructor:"By Emily Johnson",
        images : [
            `${UIUXImage1}`,`${UIUXImage2}`,`${UIUXImage3}`
        ]
    },
    {
        id:3,
        title:"Mobile App Development",
        content:"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        topics: [
                "Introduction to Mobile App Development",
                "Fundamentals of Swift Programming (iOS)",
                "Fundamentals of Kotlin Programming (Android)",
                "Building User Interfaces",
                "App Deployment and Testing"
        ],
        duration: "8 Weeks",
        difficulty_level : "Intermediate",
        instructor:"By David Brown",
        images : [
            `${MobileDevelopmentImage1}`,`${MobileDevelopmentImage2}`,`${MobileDevelopmentImage3}`
        ]
    },
    {
        id:4,
        title:"Graphic Design for Beginners",
        content:"Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        topics: [
                "Introduction to Graphic Design",
                "Typography and Color Theory",
                "Layout Design and Composition",
                "Image Editing and Manipulation",
                "Designing for Print and Digital Media"
        ],
        duration: "10 weeks",
        difficulty_level : "Intermediate",
        instructor:"By Sarah Thompson",
        images : [
            `${graphicDesignImage1}`,`${graphicDesignImage2}`,`${graphicDesignImage3}`
        ]
    },
    {
        id:5,
        title:"Front-End Web Development",
        content:"Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        topics: [
                "HTML Fundamentals",
                "CSS Styling and Layouts",
                "JavaScript Basics",
                "Building Responsive Websites",
                "Introduction to Bootstrap and React"
        ],
        duration: "10 weeks",
        difficulty_level : "Intermediate",
        instructor:"By Michael Adams",
        images : [
            `${frontEndDevelopmentImage1}`,`${frontEndDevelopmentImage2}`,`${frontEndDevelopmentImage3}`
        ]
    }
];