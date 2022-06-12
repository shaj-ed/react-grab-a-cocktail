import { Link } from "react-router-dom";

const SingleCocktail = ({ item }) => {
  const { id, name, isAlcoholic, thumb, glass } = item;
  return (
    <li className="cocktail">
      <img src={thumb} alt={name} className="cocktail__image" />
      <div className="cocktail__info">
        <h3 className="cocktail__name">{name}</h3>
        <p className="cocktail__glass">{glass}</p>
        <span className="cocktail__alco">{isAlcoholic}</span>
        <Link to={`cocktail/${id}`} className="cocktail__button">
          See Details.
        </Link>
      </div>
    </li>
  );
};

export default SingleCocktail;
