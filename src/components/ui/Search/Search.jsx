import "./search.css";

const Search = ({ placeholder }) => {
  return (
    <div className="search">
      <div className="search__input__wrapper">
        <input
          className="search__input"
          type="text"
          placeholder={placeholder}
          aria-labelledby="search-btn"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="search__icon"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <button className="search__btn" id="search-btn">
        Search
      </button>
    </div>
  );
};

export default Search;
