import edit from "../../../assets/edit.svg";
import socialmedia_svg from "../../../assets/social-media.svg";
import web_svg from "../../../assets/web.svg";
import instagram_svg from "../../../assets/instagram.svg";
import facebook_svg from "../../../assets/facebook.svg";
import twitter_svg from "../../../assets/twitter.svg";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-media-heading-container">
        <div className="social-media-heading">
          <img
            className="social-media-item-svg"
            src={socialmedia_svg}
            alt="svg"
          />
          <span className="social-media-heading-title">
            Social Media & Links
          </span>
        </div>
        <img className="social-media-item-svg-edit" src={edit} alt="svg" />
      </div>
      <div className="social-media-item">
        <div className="social-media-item-icon">
          <img className="social-media-item-svg" src={web_svg} alt="svg" />
          <span>Website</span>
        </div>
        <div className="social-media-item-icon">
          <img
            className="social-media-item-svg"
            src={instagram_svg}
            alt="svg"
          />
          <span>Instagram</span>
        </div>
        <div className="social-media-item-icon">
          <img className="social-media-item-svg" src={facebook_svg} alt="svg" />
          <span>Facebook</span>
        </div>
        <div className="social-media-item-icon">
          <img className="social-media-item-svg" src={twitter_svg} alt="svg" />
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
