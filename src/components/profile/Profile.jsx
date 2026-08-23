import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-6`}
      id="profile"
    >
      <div className="flex justify-between items-center gap-10">
        <div className="w-full">
          {/* Heading */}
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            UI Developer specializing in React.js & Angular
          </h2>

          {/* About Content */}
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600 leading-7`}
          >
            <p>
              I am a{" "}
              <strong className="text-gray-800">
                UI Developer with 2+ years of professional experience
              </strong>{" "}
              building responsive, user-focused, and scalable web applications
              using React.js, Angular, and Redux.
            </p>

            <p className="mt-4">
              I specialize in transforming wireframes and design concepts into
              functional, pixel-perfect interfaces with a strong focus on
              usability, responsiveness, accessibility, and performance. I
              enjoy creating clean and intuitive user experiences that work
              consistently across different platforms and screen sizes.
            </p>

            <p className="mt-4">
              My technical experience includes{" "}
              <strong className="text-gray-800">
                JavaScript, TypeScript, React.js, Angular, HTML5, CSS3,
                Bootstrap, Redux, and RESTful APIs
              </strong>
              . I have also worked with design and prototyping tools such as
              Figma and Adobe XD to collaborate with design teams and turn
              ideas into polished user interfaces.
            </p>

            <p className="mt-4">
              Throughout my experience, I have worked on{" "}
              <strong className="text-gray-800">
                matrimonial, e-commerce, and EdTech platforms
              </strong>
              , contributing to responsive UI development, API integration,
              state management, performance optimization, dashboards,
              promotional sections, and interactive user experiences.
            </p>

            <p className="mt-4">
              I am passionate about building modern digital experiences and
              continuously improving the quality, performance, and usability of
              web applications.
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-8 flex max-md:justify-center">
            <div className="px-6 py-3 bg-white rounded-[4px] shadow-2xl">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;