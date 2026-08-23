import Projects from "./Projects";

import card1 from "../../assets/images/portfolio-images/pellipandiri.png";
import card2 from "../../assets/images/portfolio-images/priya foods.png";
import card3 from "../../assets/images/portfolio-images/epratibha.png";
import card4 from "../../assets/images/portfolio-images/averixis.png";
import card5 from "../../assets/images/portfolio-images/flyvouge.png";
import card6 from "../../assets/images/portfolio-images/olivelements.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "REACT.JS • UI DEVELOPMENT",
    title: "Pellipandiri",
    description:
      "Responsive matrimonial web application developed using React.js. Migrated the legacy PHP-based UI to React, implemented Redux state management and RESTful API integrations, and improved page performance through code splitting, lazy loading, and image optimization.",
  
  },

  {
    id: 2,
    image: card2,
    category: "ANGULAR • E-COMMERCE",
    title: "Priya Foods (FFA)",
    description:
      "E-commerce platform where I worked on modernizing the Angular 12 frontend, improving responsive layouts and mobile navigation, integrating APIs, and enhancing dynamic product listing flows and promotional sections.",
  
  },

  {
    id: 3,
    image: card3,
    category: "REACT • ANGULAR • EDTECH",
    title: "E-Pratibha",
    description:
      "Interactive EdTech platform built using React and Angular for educational content delivery. Worked on SPAs, dashboards, course layouts, React Hooks, Angular directives, and UI/UX designs using Figma and Adobe XD.",

  },

  {
    id: 4,
    image: card4,
    category: "FREELANCE • WEB DEVELOPMENT",
    title: "Averixis Solutions",
    description:
      "Modern learning and career platform featuring courses, internships, project mentorship, consulting, learner journeys, course discovery, and career-focused digital experiences.",
    link: "https://www.averixis.com/",
  },

  {
    id: 5,
    image: card5,
    category: "FREELANCE • WEB DEVELOPMENT",
    title: "Flyvouge",
    description:
      "Professional website for an advanced aviation academy offering aviation, hospitality, and tourism training programs with course information, career support, enquiry flows, and responsive user experiences.",
    link: "https://flyvouge.com/",
  },

  {
    id: 6,
    image: card6,
    category: "FREELANCE • WEB DEVELOPMENT",
    title: "Olive Elements",
    description:
      "Hospitality and tourism platform featuring luxury camping, forest stays, nature experiences, resort development, events, bookings, and curated outdoor experiences.",
    link: "https://oliveelements.com/",
  },

  // {
  //   id: 7,
  //   image: card1,
  //   category: "FREELANCE • CORPORATE WEBSITE",
  //   title: "Green Secure Energy Systems",
  //   description:
  //     "Corporate website for an industrial power electronics company showcasing UPS systems, battery chargers, inverters, switchgear, control panels, electrification solutions, manufacturing capabilities, and industry services.",
  //   link: "https://www.greensecureenergysystems.com/",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfolio</p>

          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of professional and freelance projects showcasing my
            experience in React.js, Angular, responsive UI development, UI/UX,
            API integration, and modern web design.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
