// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Divyansh",
    LastName: "Gupta",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "",
        logo: figma,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "",
        logo: ps,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "",
        logo: sketch,
      },
      {
        name: "Python",
        para: "",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I offer comprehensive web development services tailored to your specific needs. From sleek, responsive websites that enhance your brand's online presence to robust web applications that streamline your business processes, I handle it all. Leveraging the latest technologies and design principles, I ensure your website is not only visually appealing but also user-friendly and optimized for performance. Whether you need a simple informational 1  site, an e-commerce platform, or a complex web portal, I provide end-to-end solutions, including design, development, testing, and deployment, to help you achieve your digital goals.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I offer comprehensive UI/UX services designed to create intuitive and engaging digital experiences.  My approach focuses on understanding your users' needs and translating them into visually appealing and functional interfaces. From user research and wireframing to high-fidelity design and prototyping, I ensure a seamless journey that prioritizes usability and drives positive results.  Whether you need a complete redesign or enhancements to your existing product, I can help you build a user-centered solution that elevates your brand and achieves your business goals.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "I offer professional Photoshop editing services tailored to your specific needs. Whether you require meticulous photo retouching to enhance portraits, seamless background removal for product images, or complex compositing to bring your creative visions to life, I deliver high-quality results with attention to detail. I can also handle color correction, image restoration, and various other editing tasks, ensuring your images are polished and ready for any purpose, from personal projects to commercial use.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "Aditya Raina",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Shubham Raj",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Divyansh",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "Happy",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm Divyansh Gupta, a passionate developer dedicated to creating innovative digital solutions. With a strong foundation in web development and a keen eye for design, I strive to build applications that are not only functional but also aesthetically pleasing",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "divyansh2622005@gmail.com",
        icon: GrMail,
        link: "mailto:divyansh2622005@gmail.com",
      },
      {
        text: "+91 7051678857",
        icon: MdCall,
        link: "https://wa.me/7051678857",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
