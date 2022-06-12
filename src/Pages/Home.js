import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <main className="section">
      <h2 className="section__title">#Home</h2>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
