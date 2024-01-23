import {
  available_icon,
  unavailable_icon,
} from "../../assets/resource/iconResource";

export const pricingFeaturesData = [
  {
    id: 1,
    title: "monthly",
    features: [
      [`${available_icon}`, "Access to selected free courses."],
      [`${available_icon}`, "Limited course materials and resources."],
      [`${available_icon}`, "Basic community support."],
      [`${available_icon}`, "No certification upon completion."],
      [`${available_icon}`, "Ad-supported platform."],
      [`${unavailable_icon}`, "Access to exclusive Pro Plan community forums."],
      [`${unavailable_icon}`, "Early access to new courses and updates."],
    ],
  },
  {
    id: 2,
    title:'yearly',
    features: [
      [`${available_icon}`, "Unlimited access to all courses."],
      [`${available_icon}`, "Unlimited courses and materials."],
      [`${available_icon}`, "Priority support from instructors."],
      [`${available_icon}`, "Course completion certificates."],
      [`${available_icon}`, "Ad-free platform."],
      [`${available_icon}`, "Access to exclusive Pro Plan community forums."],
      [`${available_icon}`, "Early access to new courses and updates."],
    ],
  }
];
