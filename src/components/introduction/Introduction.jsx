import person from "../../assets/images/person.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2+ Y.",
  },
  {
    id: 2,
    title: "Projects",
    description: "3+",
  },
  {
    id: 3,
    title: "Core Skills",
    description: "React & Angular",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Saivarshith Reddy Nomuluri
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a{" "}
            <span className="bg-highlight">UI Developer</span>{" "}
            specializing in{" "}
            <span className="bg-highlight">React.js</span>,{" "}
            <span className="bg-highlight">Angular</span>, TypeScript and
            UI/UX design. I build responsive, user-focused, and scalable web
            applications with a strong focus on clean, accessible, and
            intuitive user experiences.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="/resume.pdf"
              download="Saivarshith_Reddy_Nomuluri_Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className="ms-2">Download CV</span>
            </a>
          </p>
        </div>

        {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </div>

      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="Saivarshith Reddy Nomuluri"
        />
      </div>
    </div>
  );
};

export default Introduction;