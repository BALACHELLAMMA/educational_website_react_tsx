import { goalIcon1, goalIcon2, goalIcon3, goalIcon4,
         achievementIcon1, achievementIcon2,achievementIcon3, achievementIcon4 } from "../../assets/resource/IconResource"; 

interface aboutContentList{
   id:number,
   title:String,
   desc:String,
   content:Object,
}

export const aboutContentList = [
    {
        id:'achievements',
        title:"Achievements",
        desc:"Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
        content : [
            [`${achievementIcon1}`,
            "Trusted by Thousands",
            "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."],
            [`${achievementIcon2}`,
            "Award-Winning Courses",
            "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."],
            [`${achievementIcon3}`,
            "Positive Student Feedback",
            "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."],
            [`${achievementIcon4}`,
            "Industry Partnerships",
            "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"],
        ]
    },
    {
        id:'ourgoals',
        title:"Our Goals",
        desc:"At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to",
        content : [
            [`${goalIcon1}`,
            "Provide Practical Skills",
            "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."],
            [`${goalIcon2}`,
            "Foster Creative Problem-Solving",
            "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."],
            [`${goalIcon3}`,
            "Promote Collaboration and Community",
            "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."],
            [`${goalIcon4}`,
            "Stay Ahead of the Curve",
            "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."],
        ]
    }
];