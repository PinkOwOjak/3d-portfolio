import "./styles/About.css";
import { ABOUT_SUMMARY } from "../data/profile";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{ABOUT_SUMMARY}</p>
      </div>
    </div>
  );
};

export default About;
