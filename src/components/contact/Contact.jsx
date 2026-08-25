import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Hyderabad, India",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "saivarshith.nomuluri@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+91 8106491615",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-6 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[35px] max-md:text-3xl font-semibold text-[#132238]">
              Let’s Connect
            </p>

            <p className="text-[13px] xs:text-[15px] sm:text-lg pt-4 font-normal text-soft-dark max-w-2xl mx-auto">
              I’m always open to discussing new opportunities, interesting
              projects, and frontend development roles. Feel free to reach out
              through email, phone, or my social profiles.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid sm:grid-cols-3 gap-5 my-10">
            {addressData.map((item) => (
              <Address item={item} key={item.title} />
            ))}
          </div>

          {/* Contact Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:saivarshith.nomuluri@gmail.com"
              className="btn btn-primary text-white px-6 py-3"
            >
              <span>Send Email</span>
            </a>

            <a
              href="tel:+919030372304"
              className="btn bg-white border border-gray-200 px-6 py-3 hover:border-picto-primary hover:text-picto-primary transition-all"
            >
              <span>Call Me</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;