import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const SocialLink = () => {
  return (
    <div className="social">
      <a href="facebook.com" className="social__link">
        <FiFacebook />
      </a>
      <a href="facebook.com" className="social__link">
        <FiYoutube />
      </a>
      <a href="facebook.com" className="social__link">
        <FiTwitter />
      </a>
    </div>
  );
};

export default SocialLink;
