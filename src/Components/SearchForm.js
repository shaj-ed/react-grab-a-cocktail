import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const { setSearchTerm, setLoading } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchTerm(value);
    setLoading(false);
  };

  useEffect(() => {
    setSearchTerm(value);
  }, [value, setSearchTerm]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label">Look for favourite ones.</label>
      <input
        type="text"
        className="form__input"
        placeholder="ex: white wine"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="form__button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
