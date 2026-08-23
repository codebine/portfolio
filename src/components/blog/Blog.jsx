import img1 from "../../assets/images/blog/blog-1.png";
import img2 from "../../assets/images/blog/blog-2.png";
import img3 from "../../assets/images/blog/blog-3.png";
import img4 from "../../assets/images/blog/blog-4.png";
import img5 from "../../assets/images/blog/blog-5.png";
import img6 from "../../assets/images/blog/blog-6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";

import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for SwiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    title: "Building Responsive Interfaces with React.js",
    description:
      "Developing responsive and scalable web interfaces using React.js, reusable components, modern JavaScript, and responsive design principles.",
    link: "#!",
  },

  {
    id: 2,
    image: img2,
    title: "Modern UI Development with Angular",
    description:
      "Working with Angular to build structured, responsive interfaces, dynamic product experiences, and service-based API integrations.",
    link: "#!",
  },

  {
    id: 3,
    image: img3,
    title: "Turning Designs into Pixel-Perfect Interfaces",
    description:
      "Translating wireframes and prototypes from Figma and Adobe XD into functional interfaces with a strong focus on usability and visual consistency.",
    link: "#!",
  },

  {
    id: 4,
    image: img4,
    title: "Improving Web Performance",
    description:
      "Applying code splitting, lazy loading, and image compression techniques to improve page load performance and create smoother user experiences.",
    link: "#!",
  },

  {
    id: 5,
    image: img5,
    title: "React, Redux & REST API Integration",
    description:
      "Building reliable application flows using React.js, Redux state management, and RESTful APIs for smooth data handling and user interactions.",
    link: "#!",
  },

  {
    id: 6,
    image: img6,
    title: "UI Development Across Different Platforms",
    description:
      "Creating responsive interfaces that maintain consistent usability and visual quality across different browsers, devices, and screen sizes.",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      {/* Section Header */}
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Professional Highlights</p>

        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          A look at my approach to UI development, responsive design,
          performance optimization, and modern frontend technologies.
        </p>
      </div>

      {/* Highlights Slider */}
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData.map((data) => (
          <SwiperSlide
            key={data.id}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;