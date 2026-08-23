import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "UI Development",
    description:
      "I build responsive, scalable, and user-focused interfaces using React.js, Angular, JavaScript, TypeScript, HTML5, CSS3, and Bootstrap, with a strong focus on clean and consistent user experiences.",
  },
  {
    id: 2,
    title: "UI/UX & Prototyping",
    description:
      "I transform wireframes and design concepts into functional, pixel-perfect interfaces using Figma and Adobe XD, focusing on usability, visual consistency, responsive layouts, and intuitive user flows.",
  },
  {
    id: 3,
    title: "Frontend & API Integration",
    description:
      "I develop interactive web applications using React.js and Angular, working with Redux, RESTful APIs, and Angular services to create smooth data flows and maintainable frontend architectures.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">
          What I Do?
        </p>

        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in UI development, responsive web applications, and
            UI/UX implementation using modern frontend technologies. I combine
            design thinking with technical expertise to create clean,
            intuitive, and user-focused digital experiences.
          </p>

          <p className="text-xs sm:text-lg font-normal text-gray-400">
            With experience across React.js, Angular, TypeScript, Redux,
            RESTful APIs, Figma, and Adobe XD, I focus on building interfaces
            that are visually consistent, responsive, maintainable, and
            performance-oriented.
          </p>
        </div>
      </div>

      <div>
        {rolesData.map((role) => (
          <Roles role={role} key={role.id} />
        ))}
      </div>
    </div>
  );
};

export default Profession;