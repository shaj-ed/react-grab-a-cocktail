import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      grabA<span className="logo__text">cocktail</span>
    </Link>
  );
};

export default Logo;
