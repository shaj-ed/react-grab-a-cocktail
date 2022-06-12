import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="section section__error">
      <h2 className="section__title">oops! something went wrong.</h2>
      <button type="button" className="error__button" onClick={handleClick}>
        back to home
      </button>
    </section>
  );
};

export default Error;
