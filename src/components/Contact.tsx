import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { PERSONAL, SOCIAL_LINKS } from "../data/profile";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — PinkOwOjak
              </a>
            </p>
            <h4>Education</h4>
            <p>
              National Institute of Technology Silchar — B.Tech CSE
            </p>
            <p>
              Badda Alatunnesa Higher Secondary School
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <FaGithub /> <MdArrowOutward />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <FaEnvelope /> <MdArrowOutward />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <FaWhatsapp /> <MdArrowOutward />
            </a>
            <a
              href={PERSONAL.resumeLink}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pranto Mollik</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
