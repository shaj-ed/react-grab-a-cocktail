import Logo from "./Logo";
import NavBar from "./NavBar";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <NavBar />
        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
