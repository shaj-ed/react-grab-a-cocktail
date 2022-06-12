import React, { useCallback, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState({});

  const fetchCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const drinks = await data.drinks;
      if (drinks) {
        const organizedDrinks = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            isAlcoholic: strAlcoholic,
            thumb: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktails(organizedDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktail();
  }, [searchTerm, fetchCocktail]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, setSearchTerm, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

// {idDrink,strAlcoholic,strDrinkThumb,strGlass} = drink;
