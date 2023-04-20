import "./About.css";
import logo from "../../assets/logo.png";
import Address from "./address/Address";
import Contact from "./contact/Contact";
import WorkHours from "./workhours/WorkHours";
import SocialMedia from "./social-media/SocialMedia";
import Statement from "./statement/Statement";

const About = () => {
  return (
    <div className="aboutus">
      <div>
        <h2>About Us</h2>
        <div className="aboutus-header">
          <div className="aboutus-info">
            <img className="aboutus-logo" src={logo} alt="Checkout button" />
            <div className="aboutus-company-details">
              <span className="aboutus-company-details-title">A.T. Inks</span>
              <span className="aboutus-company-details-tagline">
                Digital Inks
              </span>
            </div>
          </div>
          <p className="aboutus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <ul className="aboutus-links">
            <li className="aboutus-link">Info</li>
            <li className="aboutus-link">FAQ</li>
            <li className="aboutus-link">Complaints and feedback </li>
            <li className="aboutus-link">Privacy Policy</li>
            <li className="aboutus-link">Terms & Conditions</li>
          </ul>
        </div>
        <div className="aboutus-main">
          <Contact />
          <Address />
          <WorkHours />
          <SocialMedia />
          <Statement />
        </div>
      </div>
    </div>
  );
};

export default About;
