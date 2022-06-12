import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktailPage = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();

  const fetchSingleCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const drink = await data.drinks[0];
      const {
        idDrink,
        strAlcoholic,
        strCategory,
        strDrink,
        strDrinkThumb,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drink;
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const organizedCocktail = {
        id: idDrink,
        name: strDrink,
        isAlcoholic: strAlcoholic,
        thumb: strDrinkThumb,
        glass: strGlass,
        category: strCategory,
        instructions: strInstructions,
        ingredients,
      };
      setCocktail(organizedCocktail);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCocktail(null);
      setLoading(false);
      console.log(cocktail);
    }
  }, [cocktail, id]);

  useEffect(() => {
    fetchSingleCocktail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <section className="section">
        <h2 className="section__title">no results found.</h2>{" "}
        <Link to="/" className="section__button">
          Back to home
        </Link>
      </section>
    );
  } else {
    const {
      thumb,
      name,
      instructions,
      ingredients,
      glass,
      category,
      isAlcoholic,
    } = cocktail;

    return (
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">{name}</h2>
          <Link to="/" className="section__button">
            Back to home
          </Link>
        </div>
        <div className="drink">
          <img src={thumb} alt={name} className="drink__image" />
          <div className="drink__content">
            <p className="drink__name">
              <strong>name : </strong> {name}
            </p>
            <p className="drink__glass">
              <strong>glass : </strong> {glass}
            </p>
            <p className="drink__category">
              <strong>category : </strong> {category}
            </p>
            <p className="drink__info">
              <strong>isAlcoholic : </strong> {isAlcoholic}
            </p>
            <p className="drink__intruc">
              <strong>instructions : </strong> {instructions}
            </p>
            <p className="drink__ingred">
              <strong>ingredients : </strong>{" "}
              {ingredients.map((item, index) => {
                if (item) {
                  return <i key={index}>{item},</i>;
                }
                return item;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktailPage;
