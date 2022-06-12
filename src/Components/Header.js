import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
