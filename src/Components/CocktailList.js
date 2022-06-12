import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import SingleCocktail from "./SingleCocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);

  if (loading) {
    return (
      <main className="section">
        <Loading />
      </main>
    );
  }

  if (cocktails.length === 0) {
    return (
      <main className="section">
        <h2 className="section__title">
          no result found under your provided value.
        </h2>
      </main>
    );
  }

  return (
    <section className="cocktails">
      <h2 className="cocktails__headline">grab your cocktail.</h2>
      <ul className="cocktails__list">
        {cocktails.map((item) => {
          return <SingleCocktail key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default CocktailList;
