import "./Sidebar.css";
import logo from "../../assets/logo.png";
import dashboard from "../../assets/dashboard.svg";
import orders from "../../assets/orders.svg";
import team from "../../assets/team.svg";
import partners from "../../assets/partners.svg";
import products from "../../assets/products.svg";
import awards from "../../assets/awards.svg";
import aboutinfo from "../../assets/aboutinfo.svg";
import dollar from "../../assets/dollar.svg";
import help from "../../assets/help.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img className="sidebar-logo" src={logo} alt="logo" />
        <span>A.T. Inks</span>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <img className="nav-link-svg" src={dashboard} alt="logo" />
          <span className="nav-link-title">Dashboard</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={orders} alt="logo" />
          <span className="nav-link-title">Orders</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={team} alt="logo" />
          <span className="nav-link-title">Team Members</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={partners} alt="logo" />
          <span className="nav-link-title">Partners</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={products} alt="logo" />
          <span className="nav-link-title">Products Listings</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={awards} alt="logo" />
          <span className="nav-link-title">Awards & Honours</span>
        </li>
        <li className="nav-link-active">
          <img className="nav-link-svg" src={aboutinfo} alt="logo" />
          <span className="nav-link-title ">About Us</span>
        </li>
        <li className="nav-link">
          <img className="nav-link-svg" src={dollar} alt="logo" />
          <span className="nav-link-title">Payments Info</span>
        </li>
      </ul>
      <div className="sidebar-footer">
        <img className="nav-link-svg" src={help} alt="logo" />
        <h6>Need Help?</h6>
        <p>Our support team is at your disposal.</p>
        <a className="profile-btn see-my-work--btn" href="www.www">
          Get Help
        </a>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
